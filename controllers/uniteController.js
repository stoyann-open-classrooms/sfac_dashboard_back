const db = require("../models");

// model
const Unite = db.unites;

// fonctions

const addUnite = async (req, res) => {
  const id = req.params.id;

  let data = {
    unite: req.body.unite,
    abreviation: req.body.abreviation,
  };

  const unite = await Unite.create(data);
  res.status(200).send(unite);
};

const getAllUnites = async (req, res) => {
  let unites = await Unite.findAll()
    .then((unites) =>
      res.json({
        message: `✅ ${unites.length} unités ont étè trouvé`,
        data: unites,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};

const getOneUnite = async (req, res) => {
  let id = req.params.id;
  let unite = await Unite.findOne({ where: { id: id } });
  res.status(200).send(unite);
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
  getOneUnite,
  updateUnite,
  deleteUnite,
};
