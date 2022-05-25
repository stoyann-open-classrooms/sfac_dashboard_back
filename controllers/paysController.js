const db = require("../models");

// model
const Pays = db.payss;

// fonctions

const addPays = async (req, res) => {
  const id = req.params.id;

  let data = {
    nom: req.body.nom,
  };

  const pays = await Pays.create(pays);
  res.status(200).send(pays);
};

const getAllPays = async (req, res) => {
  const pays = await Pays.findAll({});
  res.status(200).send(pays);
};

const updatePays = async (req, res) => {
  let id = req.params.id;

  const pays = await Pays.update(req.body, { where: { id: id } });

  res.status(200).send(pays);
};

const deletePays = async (req, res) => {
  let id = req.params.id;

  await Pays.destroy({ where: { id: id } });

  res.status(200).send("Le pays est suprimée !");
};

module.exports = {
  addPays,
  getAllPays,
  updatePays,
  deletePays,
};
