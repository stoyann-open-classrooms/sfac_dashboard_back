const db = require("../models");

// model
const Frspdt = db.frspdts;

// fonctions

//1. Ajout dun fournisseur

const addFrspdt = async (req, res) => {
  const id = req.params.id;

  let data = {
    delai_jour: req.body.delai_jour,
    quantite_min: req.body.quantite_min,
    quantite_unite: req.body.quantite_unite,
  };
  console.log(data.quantite_min);
  const frspdt = await Frspdt.create(data);
  res.status(200).send(frspdt);
};

// 2. tout les fournisseurs

const getAllFrspdts = async (req, res) => {
  let frspdts = await Frspdt.findAll()
    .then((frspdt) =>
      res.json({
        message: `✅ ${frspdt.length} FRSPDT ont étè trouvé`,
        data: frspdt,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};
const getOneFrspdt = async (req, res) => {
  let id = req.params.id;
  let frspdt = await Frspdt.findOne({ where: { id: id } });
  res.status(200).send(frspdt);
};
// modifier un fournisseur
const updateFrspdt = async (req, res) => {
  let id = req.params.id;

  const frspdt = await Frspdt.update(req.body, { where: { id: id } });

  res.status(200).send(frspdt);
};

// 5.Supprimer un fournisseur

const deleteFrspdt = async (req, res) => {
  let id = req.params.id;

  await Frspdt.destroy({ where: { id: id } });

  res.status(200).send("La FRSPDT est suprimée !");
};

module.exports = {
  addFrspdt,
  getAllFrspdts,
  updateFrspdt,
  getOneFrspdt,
  deleteFrspdt,
};
