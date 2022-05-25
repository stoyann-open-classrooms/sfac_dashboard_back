const db = require("../models");

// model
const Fournisseur = db.fournisseurs;

// image Upload
// image Upload
const multer = require("multer");
const path = require("path");
// fonctions

//1. Ajout dun fournisseur

const addFournisseur = async (req, res) => {
  const id = req.params.id;

  let data = {
    nom: req.body.nom,
    image: req.file.path,
    adresse: req.body.adresse,
    site: req.body.site,
    id_pays: req.body.id_pays,
  };

  const fournisseur = await Fournisseur.create(data);
  res.status(200).send(fournisseur);
};

// 2. tout les fournisseurs

const getAllFournisseurs = async (req, res) => {
  const fournisseurs = await Fournisseur.findAll({});
  res.status(200).send(fournisseurs);
};

// modifier un fournisseur
const updateFournisseur = async (req, res) => {
  let id = req.params.id;

  const fournisseur = await Fournisseur.update(req.body, { where: { id: id } });

  res.status(200).send(fournisseur);
};

// 5.Supprimer un fournisseur

const deleteFournisseur = async (req, res) => {
  let id = req.params.id;

  await Fournisseur.destroy({ where: { id: id } });

  res.status(200).send("Le fournisseur est suprimée !");
};

// 8. Upload Image Controller
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

module.exports = {
  addFournisseur,
  getAllFournisseurs,
  updateFournisseur,
  deleteFournisseur,
  upload,
};
