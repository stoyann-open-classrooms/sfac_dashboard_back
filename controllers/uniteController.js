const db = require("../models");

// model
const Unite = db.unites;

// fonctions

const addUnite = async (req, res) => {
  const id = req.params.id;

  let data = {
    nom: req.body.nom,
  };

  const unite = await Unite.create(data);
  res.status(200).send(unite);
};

const getAllUnites = async (req, res) => {
  const unites = await Unite.findAll({});
  res.status(200).send(unites);
};

const updateUnite = async (req, res) => {
  let id = req.params.id;

  const unite = await Unite.update(req.body, { where: { id: id } });

  res.status(200).send(unite);
};

const deleteUnite = async (req, res) => {
  let id = req.params.id;

  await Unite.destroy({ where: { id: id } });

  res.status(200).send("L'unité est suprimée !");
};

module.exports = {
  addUnite,
  getAllUnites,
  updateUnite,
  deleteUnite,
};
