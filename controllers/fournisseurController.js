const db = require("../models");

// Imports des models
const Fournisseur = db.fournisseurs;
const Produit = db.produits;

// image Upload
const multer = require("multer");
const path = require("path");

// =========================== Recuperer la liste de tous les fournisseurs ========================================

const addFournisseur = async (req, res) => {
  const id = req.params.id;
  let data = {
    nom: req.body.nom,
    image: req.file.path,
    site: req.body.site,
    adresse: req.body.adresse,
    email: req.body.email,
    phone: req.body.phone,
  };

  const fournisseur = await Fournisseur.create(data);
  res.status(200).send(fournisseur);
};

// =========================== Recuperer la liste de tous les fournisseurs ========================================

const getAllFournisseurs = async (req, res) => {
  let fournisseurs = await Fournisseur.findAll({
    include: { model: Produit, as: "produits" },
  })
    .then((fournisseur) =>
      res.json({
        message: `✅ ${fournisseur.length} Fournisseurs en base de données`,
        data: fournisseur,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};

// =========================== Recuperer un fournisseur via son ID ========================================
const getOneFounisseur = async (req, res) => {
  let id = req.params.id;
  let fournisseur = await Fournisseur.findOne({ where: { id: id } });
  res.status(200).send(fournisseur);
};

// =========================== Modifier  un fournisseur via son ID ========================================

const updateFournisseur = async (req, res) => {
  let id = req.params.id;

  const fournisseur = await Fournisseur.update(req.body, { where: { id: id } });

  res.status(200).send(fournisseur);
};

// =========================== Supprimer un fournisseur via son ID ========================================
const deleteFournisseur = async (req, res) => {
  let id = req.params.id;

  await Fournisseur.destroy({ where: { id: id } });

  res.status(200).send("Le fournisseur est suprimée !");
};

// =========================== UPLOAD IMAGE CONTROLLER's ========================================

const im = "logo_fournisseur_";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, im + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

// =========================== EXPORT ========================================

module.exports = {
  addFournisseur,
  getAllFournisseurs,
  getOneFounisseur,
  updateFournisseur,
  deleteFournisseur,
  upload,
};
