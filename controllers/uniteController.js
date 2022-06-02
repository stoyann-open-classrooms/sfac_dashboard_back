const db = require("../models");

// models
const Unite = db.unites;

// =========================== Ajouter une unite ========================================

const addUnite = async (req, res) => {
  const id = req.params.id;
  let data = {
    unite: req.body.unite,
    abreviation: req.body.abreviation,
  };
  const unite = await Unite.create(data);
  res.status(200).send(unite);
};

// =========================== Recuperer la liste de toutes les  unites ========================================

const getAllUnites = async (req, res) => {
  let unites = await Unite.findAll()
    .then((unites) =>
      res.json({
        message: `✅ ${unites.length} unité(s) ont étè trouvé`,
        data: unites,
      })
    )
    .catch((err) =>
      res.status(500).json({
        message: `⛔️ Une erreur est survenue, veuillez réessayer ⛔️`,
      })
    );
};

// =========================== Recuperer une unite via son ID ========================================
const getOneUnite = async (req, res) => {
  let id = req.params.id;
  let unite = await Unite.findOne({ where: { id: id } });
  res.status(200).send(unite);
};

// =========================== Modifier une unite via son ID ========================================
const updateUnite = async (req, res) => {
  let id = req.params.id;

  const unite = await Unite.update(req.body, { where: { id: id } });

  res.status(200).send(unite);
};

// =========================== Supprimer une unite via son ID ========================================

const deleteUnite = async (req, res) => {
  let id = req.params.id;

  await Unite.destroy({ where: { id: id } });

  res.status(200).send("L'unité est suprimée !");
};

// =========================== EXPORTS ========================================

module.exports = {
  addUnite,
  getAllUnites,
  getOneUnite,
  updateUnite,
  deleteUnite,
};
