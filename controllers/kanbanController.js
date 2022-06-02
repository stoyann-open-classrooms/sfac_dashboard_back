const db = require("../models");

// models
const Kanban = db.kanbans;
const Produit = db.produits;

// =========================== Ajouter un kanban ========================================

const addKanban = async (req, res) => {
  const id = req.params.id;

  let data = {
    uid_nfc: req.body.uid_nfc,
    produitId: req.body.produitId,
  };

  const kanban = await Kanban.create(data);
  res.status(200).send(kanban);
};
// =========================== Recuperer la  liste de tous les kanbans via son ID ========================================

const getAllKanbans = async (req, res) => {
  let kanbans = await Kanban.findAll({
    include: { model: Produit, as: "produit" },
  })
    .then((kanbans) =>
      res.json({
        message: `✅ ${kanbans.length} Kanban(s) trouvé`,
        data: kanbans,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};

// =========================== Recuperer un kanban via son ID ========================================

const getOneKanban = async (req, res) => {
  let id = req.params.id;
  let kanban = await Kanban.findOne({ where: { id: id } });
  res.status(200).send(kanban);
};

// ===========================Modifier un kanban via son ID ========================================

const updateKanban = async (req, res) => {
  let id = req.params.id;

  const kanban = await Kanban.update(req.body, { where: { id: id } });

  res.status(200).send(kanban);
};

// =========================== Supprimer un kanban via son ID ========================================

const deleteKanban = async (req, res) => {
  let id = req.params.id;

  await Kanban.destroy({ where: { id: id } });

  res.status(200).send("La kanban est suprimée !");
};

// =========================== EXPORTS ========================================

module.exports = {
  addKanban,
  getOneKanban,
  getAllKanbans,
  updateKanban,
  deleteKanban,
};
