const db = require("../models");

// models
const Categorie = db.categories;

// =========================== Ajouter une unite ========================================

const addCategorie = async (req, res) => {
  const id = req.params.id;
  let data = {
    categorie: req.body.categorie,
  };
  const categorie = await Categorie.create(data);
  res.status(200).send(categorie);
};

// =========================== Recuperer la liste de toutes les  unites ========================================

const getAllCategories = async (req, res) => {
  let categories = await Categorie.findAll()
    .then((categories) =>
      res.json({
        message: `✅ ${categories.length} categorie(s) ont étè trouvé ✅`,
        data: categories,
      })
    )
    .catch((err) =>
      res.status(500).json({
        message: `⛔️ Une erreur est survenue, veuillez réessayer ⛔️`,
      })
    );
};

// =========================== Recuperer une unite via son nom et les produits associé ========================================
const getOneCategorie = async (req, res) => {
  let id = req.params.id;
  let categorie = await Categorie.findOne({ where: { id: id } });
  res.status(200).send(categorie);
};

// =========================== Modifier une unite via son ID ========================================
const updateCategorie = async (req, res) => {
  let id = req.params.id;

  const categorie = await Categorie.update(req.body, { where: { id: id } });

  res.status(200).send(categorie);
};

// =========================== Supprimer une unite via son ID ========================================

const deleteCategorie = async (req, res) => {
  let id = req.params.id;

  await Categorie.destroy({ where: { id: id } });

  res.status(200).send("✅✅ La categorie est suprimée ! ✅✅");
};

// =========================== EXPORTS ========================================

module.exports = {
  addCategorie,
  getAllCategories,
  getOneCategorie,
  updateCategorie,
  deleteCategorie,
};
