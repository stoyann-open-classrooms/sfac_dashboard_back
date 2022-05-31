const db = require("../models");

// model
const Demande = db.demandes;
const Kanban = db.kanbans;
const Produit = db.produits;

// fonctions

const addDemande = async (req, res) => {
  const id = req.params.id;

  let data = {
    date_demande: req.body.date_demande,
    urgent: req.body.urgent,
    quantite: req.body.quantite,
    num_commande: req.body.num_commande,
    date_commande: req.body.date_commande,
    date_livraison: req.body.date_livraison,
  };

  const demande = await Demande.create(data);
  res.status(200).send(demande);
};

// 2. tout les fournisseurs

const getAllDemandes = async (req, res) => {
  let demandes = await Demande.findAll({
    include: { model: Kanban, as: "kanban" },
  })
    .then((demande) =>
      res.json({
        message: `✅ ${demande.length} demandes ont étè trouvé`,
        data: demande,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};

const getOneDemande = async (req, res) => {
  let id = req.params.id;
  let demande = await Demande.findOne({ where: { id: id } });
  res.status(200).send(demande);
};

const getUrgentesDemande = async (req, res) => {
  const urgentDemande = await Demande.findAll({ where: { urgent: true } });

  res.status(200).send(urgentDemande);
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

const getDemandeAtraiter = async (req, res) => {
  const aTraiter = await Demande.findAll({ where: { status: "A traiter" } });

  res.status(200).send(aTraiter);
};

const getDemandesEnCours = async (req, res) => {
  let enCours = await Demande.findAll({
    where: { status: "en cours" }, //on veux uniquement ceux qui ont le role "2"
    order: [["date_demande", "ASC"]],
  })
    .then((demande) =>
      res.json({
        message: `✅ ${demande.length} demandes ont étè trouvé`,
        data: demande,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};

module.exports = {
  addDemande,
  getAllDemandes,
  getUrgentesDemande,
  getDemandeAtraiter,
  getDemandesEnCours,
  updateDemande,
  getOneDemande,
  deleteDemande,
};
