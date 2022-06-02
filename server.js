const express = require("express");
const cors = require("cors");
const app = express();

// ==========================   middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================================static Images Folder
app.use("/Images", express.static("./Images"));

//  ===========================================================   routers

// fournisseur
const fournisseurRouter = require("./routes/fournisseurRouter");
app.use(`${process.env.BASE_URL}/fournisseur`, fournisseurRouter);
// demande
const demandeRouter = require("./routes/demandeRouter");
app.use(`${process.env.BASE_URL}/demande`, demandeRouter);
// kanban
const kanbanRouter = require("./routes/kanbanRouter");
app.use(`${process.env.BASE_URL}/kanban`, kanbanRouter);
// FRSPDT
const frspdtRouter = require("./routes/frspdtRouter");
app.use(`${process.env.BASE_URL}/frspdt`, frspdtRouter);
// produit
const produitRouter = require("./routes/produitRouter");
app.use(`${process.env.BASE_URL}/produit`, produitRouter);
// unite
const uniteRouter = require("./routes/uniteRouter");
app.use(`${process.env.BASE_URL}/unite`, uniteRouter);
// user
// categorie
const categorieRouter = require("./routes/categorieRouteur");
app.use(`${process.env.BASE_URL}/categorie`, categorieRouter);
// user
const userRouter = require("./routes/userRouter");
app.use(`${process.env.BASE_URL}/users`, userRouter);
// auth
const authRouter = require("./routes/authRouter.js");
const { attachment } = require("express/lib/response");
app.use(`${process.env.BASE_URL}/auth`, authRouter);

// ++++++++++++++++++++++++++++ demmarage du serveur  ++++++++++++++++++++++++++++
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    ` ✅✅✅✅✅✅✅✅  Le serveur est demmarée sur le port : ${process.env.SERVER_PORT} ✅✅✅✅✅✅✅✅ `
  );
});

// TODO securisation de l'api et authentification 2FA

// https://blog.arcoptimizer.com/creation-de-flux-de-mots-de-passe-securises-avec-nodejs-et-mysql
