const db = require("../models");

// model
const Demande = db.demandes;

// fonctions

const addDemande = async (req, res) => {
  const id = req.params.id;

  let data = {
    kanban_id: req.body.kanban_id,
    date_demande: req.body.date_demande,
    urgent: req.body.urgent,
    quantite: req.body.quantite,
    num_commande: req.body.num_commande,
    date_commande: req.body.date_commande,
    date_livraison: req.body.date_livraison,
    frspdt_id: req.body.frspdt_id,
  };

  const demande = await Demande.create(data);
  res.status(200).send(demande);
};

// 2. tout les fournisseurs

const getAllDemandes = async (req, res) => {
  const demandes = await Demande.findAll({});
  res.status(200).send(demandes);
};

// modifier un fournisseur
const updateDemande = async (req, res) => {
  let id = req.params.id;

  const demande = await Demande.update(req.body, { where: { id: id } });

  res.status(200).send(demande.body);
};

// 5.Supprimer un fournisseur

const deleteDemande = async (req, res) => {
  let id = req.params.id;

  await Demande.destroy({ where: { id: id } });

  res.status(200).send("La demande est suprimée !");
};

module.exports = {
  addDemande,
  getAllDemandes,
  updateDemande,
  deleteDemande,
};
