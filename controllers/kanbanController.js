const db = require("../models");
// image Upload

// model
const Kanban = db.kanbans;

// fonctions

const addKanban = async (req, res) => {
  const id = req.params.id;

  let data = {
    produit_id: req.body.product_id,
    uid_nfc: req.body.uid_nfc,
  };

  const kanban = await Kanban.create(data);
  res.status(200).send(kanban);
};

// 2. tout les fournisseurs

const getAllKanbans = async (req, res) => {
  const kanbans = await Kanban.findAll({});
  res.status(200).send(kanbans);
};

// modifier un fournisseur
const updateKanban = async (req, res) => {
  let id = req.params.id;

  const kanban = await Kanban.update(req.body, { where: { id: id } });

  res.status(200).send(kanban);
};

// 5.Supprimer un fournisseur

const deleteKanban = async (req, res) => {
  let id = req.params.id;

  await Kanban.destroy({ where: { id: id } });

  res.status(200).send("La kanban est suprimée !");
};

module.exports = {
  addKanban,

  getAllKanbans,
  updateKanban,
  deleteKanban,
};
