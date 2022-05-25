const db = require("../models");

// model
const Appareil = db.appareils;

// fonctions

const addAppareil = async (req, res) => {
  const id = req.params.id;

  let data = {
    refference: req.body.refference,
  };

  const appareil = await Appareil.create(data);
  res.status(200).send(appareil);
};

const getAllAppareils = async (req, res) => {
  const appareils = await Appareil.findAll({});
  res.status(200).send(appareils);
};

const deleteAppareil = async (req, res) => {
  let id = req.params.id;

  await Appareil.destroy({ where: { id: id } });

  res.status(200).send("L'appareil est suprimée !");
};

module.exports = {
  addAppareil,
  getAllAppareils,
  deleteAppareil,
};
