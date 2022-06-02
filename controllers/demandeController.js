const db = require("../models");

// Imports des models
const Demande = db.demandes;
const Kanban = db.kanbans;

// =========================== Ajouter une demande ========================================
const addDemande = async (req, res) => {
  const id = req.params.id;

  let data = {
    urgent: req.body.urgent,
    quantite: req.body.quantite,
    remarques: req.body.remarques,
    kanbanId: req.body.kanbanId,
  };

  const demande = await Demande.create(data);
  res.status(200).send(demande);
};

// =========================== Recuperer la liste des demandes ========================================

const getAllDemandes = async (req, res) => {
  let demandes = await Demande.findAll({
    include: { model: Kanban, as: "kanban" },
  })
    .then((demande) =>
      res.json({
        message: `✅ ${demande.length} demande(s) ont étè trouvé`,
        data: demande,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};

// =========================== Recuperer une demande via son ID========================================

const getOneDemande = async (req, res) => {
  let id = req.params.id;
  let demande = await Demande.findOne({
    where: { id: id },
    include: { model: Kanban, as: "kanban" },
  });
  res.status(200).send(demande);
};

// =========================== Recuperer la liste des demandes urgente========================================
const getUrgentesDemande = async (req, res) => {
  const urgentDemande = await Demande.findAll({ where: { urgent: true } });

  res.status(200).send(urgentDemande);
};

// =========================== Modifier une demande ========================================

const updateDemande = async (req, res) => {
  let id = req.params.id;

  const demande = await Demande.update(req.body, { where: { id: id } });

  res.status(200).send(demande.body);
};

// =========================== Supprimer une demande ========================================

const deleteDemande = async (req, res) => {
  let id = req.params.id;

  await Demande.destroy({ where: { id: id } });

  res.status(200).send("La demande est suprimée !");
};

// =========================== Recupere la liste des demandes a traiter ========================================
const getDemandeAtraiter = async (req, res) => {
  const aTraiter = await Demande.findAll({ where: { status: "A traiter" } });

  res.status(200).send(aTraiter);
};

// =========================== Recupere la liste des demandes en cours ========================================
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

// =========================== EXPORTS========================================

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
