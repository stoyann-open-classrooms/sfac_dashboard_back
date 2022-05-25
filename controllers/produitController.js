const db = require("../models");

// model
const Produit = db.produits;
const Fournisseur = db.fournisseur;
// image Upload
const multer = require("multer");
const path = require("path");
// fonctions

const addProduit = async (req, res) => {
  const id = req.params.id;

  let data = {
    image: req.file.path,
    refference: req.body.refference,
    designation: req.body.designation,
  };

  const produit = await Produit.create(data);
  res.status(200).send(produit);
};

const getAllProduits = async (req, res) => {
  const produits = await Produit.findAll({ include: Fournisseur });
  res.status(200).send(produits);
};
// modifier un fournisseur
const updateProduit = async (req, res) => {
  let id = req.params.id;

  const produit = await Produit.update(req.body, { where: { id: id } });

  res.status(200).send(produit);
};

// 5.Supprimer un fournisseur

const deleteProduit = async (req, res) => {
  let id = req.params.id;

  await Produit.destroy({ where: { id: id } });

  res.status(200).send("Le produit est suprimée !");
};

// 8. Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
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
  addProduit,
  getAllProduits,

  updateProduit,
  deleteProduit,
  upload,
};
