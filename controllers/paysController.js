const db = require("../models");

// model
const Pays = db.payss;

// fonctions

const addPays = async (req, res) => {
  const id = req.params.id;

  let data = {
    nom: req.body.nom,
  };

  const pays = await Pays.create(data);
  res.status(200).send(pays);
};

const getAllPays = async (req, res) => {
  let pays = await Pays.findAll()
    .then((pays) =>
      res.json({
        message: `✅ ${pays.length} Pays ont étè trouvé`,
        data: pays,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};

const getOnePays = async (req, res) => {
  let id = req.params.id;
  let pays = await Pays.findOne({ where: { id: id } });
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
  getOnePays,
  deletePays,
};
