const db = require("../models");
const unite = require("../models/unite");

// model
const Frspdt = db.frspdts;
const Produit = db.produits;
const Unite = db.unites;

// =========================== Ajouter un FRSPDT  ========================================

const addFrspdt = async (req, res) => {
  const id = req.params.id;

  let data = {
    delai_jour: req.body.delai_jour,
    quantite_min: req.body.quantite_min,
    quantite_unite: req.body.quantite_unite,
    produitId: req.body.produitId,
    uniteId: req.body.uniteId,
  };
  console.log(data.quantite_min);
  const frspdt = await Frspdt.create(data);
  res.status(200).send(frspdt);
};

// =========================== Recuperer la liste de tous les  FRSPDT's  ========================================

const getAllFrspdts = async (req, res) => {
  let frspdts = await Frspdt.findAll({
    include: { model: Produit, as: "produit", model: Unite, as: "unite" },
  })
    .then((frspdt) =>
      res.json({
        message: `✅ ${frspdt.length} FRSPDT'(s) trouvé`,
        data: frspdt,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};
// =========================== Recuperer  un FRSPDT via son ID ========================================
const getOneFrspdt = async (req, res) => {
  let id = req.params.id;
  let frspdt = await Frspdt.findOne({ where: { id: id } });
  res.status(200).send(frspdt);
};

// =========================== Modifier  un FRSPDT via son ID ========================================

const updateFrspdt = async (req, res) => {
  let id = req.params.id;

  const frspdt = await Frspdt.update(req.body, { where: { id: id } });

  res.status(200).send(frspdt);
};

// =========================== Supprimer un FRSPDT via son ID ========================================

const deleteFrspdt = async (req, res) => {
  let id = req.params.id;

  await Frspdt.destroy({ where: { id: id } });

  res.status(200).send("La FRSPDT est suprimée !");
};

// =========================== EXPORTS ========================================

module.exports = {
  addFrspdt,
  getAllFrspdts,
  updateFrspdt,
  getOneFrspdt,
  deleteFrspdt,
};
