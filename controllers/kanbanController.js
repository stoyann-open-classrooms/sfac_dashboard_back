const db = require("../models");
// image Upload

// model
const Kanban = db.kanbans;
const Produit = db.produits;

// fonctions

const addKanban = async (req, res) => {
  const id = req.params.id;

  let data = {
    uid_nfc: req.body.uid_nfc,
  };

  const kanban = await Kanban.create(data);
  res.status(200).send(kanban);
};

const getAllKanbans = async (req, res) => {
  let kanbans = await Kanban.findAll({
    include: { model: Produit, as: "produit" },
  })
    .then((kanbans) =>
      res.json({
        message: `✅ ${kanbans.length} Kanbans ont étè trouvé`,
        data: kanbans,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};

// 2. tout les fournisseurs

const getOneKanban = async (req, res) => {
  let id = req.params.id;
  let kanban = await Kanban.findOne({ where: { id: id } });
  res.status(200).send(kanban);
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
  getOneKanban,
  getAllKanbans,
  updateKanban,
  deleteKanban,
};
