// Dependence
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//  =========== Imports des models
const User = db.users;

// =========================== Login User ========================================

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("  ⛔️ ⛔️  Bad email or password ⛔️⛔️ ");
  }
  await User.findOne({
    where: { email: email },
    raw: true,
  })
    .then((user) => {
      if (user === null) {
      }
      //verification password

      bcrypt
        .compare(password, user.password)
        .then((test) => {
          if (!test) {
            return res
              .status(401)
              .send("  ⛔️⛔️ Mot de passe incorrecte ⛔️⛔️");
          }

          // generation du web token
          const token = jwt.sign(
            {
              id: user.id,
              email: user.email,
            },
            process.env.JWT_SECRET
            // { expiresIn: process.env.JWT_DURING }
          );
          return res.json({
            message: " ✅✅ l'uttilisateur est authentifié ✅✅ ",
            access_token: token,
          });
        })
        .catch((err) =>
          res
            .status(500)
            .send(
              " ⛔️⛔️ Une erreur, c'est produit veuillez réessayer ⛔️⛔️ "
            )
        );
    })
    .catch((err) => res.status(500).send("⛔️⛔️ Erreur Database  ⛔️⛔️"));
};

// =========================== EXPORT ========================================

module.exports = {
  login,
};
