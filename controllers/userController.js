const db = require("../models");
const bcrypt = require("bcrypt");

// create main Model
const User = db.users;

// main work

// 1. create product

const addUser = async (req, res) => {
  let info = {
    email: req.body.email,
    password: req.body.password,
  };

  let user = await User.findOne({
    where: { email: info.email },
    raw: true,
  }).then((user) => {
    //Vérification si l'uttisateur existe déjà
    if (user !== null) {
      return res.status(409).json({
        message: `⛔️ Un uttilisateur est déja inscrit avec cette email ! ⛔️`,
      });
    }

    // hachage du mot de passe de l'uttilisateur

    bcrypt
      .hash(info.password, 10)
      .then((hash) => {
        info.password = hash;

        // Création  de l'uttilisateur

        User.create(info)
          .then((user) =>
            res.json({ message: " ✅ New user created", data: user })
          )
          .catch((err) =>
            res.status(500).json({ message: "⛔️ Database error", error: err })
          );
      })

      .catch((err) =>
        res
          .status(500)
          .json({ message: "⛔️ Database error ⛔️⛔️⛔️⛔️", error: err })
      );
  });
};

// 2. get all trocs

const getAllUsers = async (req, res) => {
  let users = await User.findAll()
    .then((users) =>
      res.json({
        message: " ✅Tous les uttilisateur ont étè trouvé",
        data: users,
      })
    )
    .catch((err) =>
      res.status(500).json({ message: `⛔️ Database Error`, error: err })
    );
};

// 3. get one user

const getOneUser = async (req, res) => {
  let userId = parseInt(req.params.id);
  //Vérification si le champs id est présent et cohérent
  if (!userId) {
    return res.json(400).json({ message: " ⛔️ Missing parameter" });
  }
  //Récuperation de l'uttilisateur
  User.findOne({ where: { id: userId }, raw: true })
    .then((user) => {
      if (user === null) {
        return res
          .status(404)
          .json({ message: " ⛔️ This user does not exist !" });
      }
      // Uttilisateur trouvée
      return res.json({ data: user });
    })
    .catch((err) =>
      res.status(500).json({ message: " ⛔️ Database error", error: err })
    );
};

// 4. update Product

const updateUser = async (req, res) => {
  let id = req.params.id;

  const user = await User.update(req.body, { where: { id: id } });

  res.status(200).send(user);
};

// 5. delete product by id

const deleteUser = async (req, res) => {
  let id = req.params.id;

  await User.destroy({ where: { id: id } });

  res.status(200).send("user is deleted !");
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,

  updateUser,
  deleteUser,
};
