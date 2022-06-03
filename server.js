const express = require("express");
const cors = require("cors");
const app = express();
const checkTokenMiddleware = require("./jsonWebToken.js/check");

// ==========================   middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================================static Images Folder
app.use("/Images", express.static("./Images"));

//  ===========================================================   routers

// fournisseur
const fournisseurRouter = require("./routes/fournisseurRouter");
app.use(
  `${process.env.BASE_URL}/fournisseur`,
  checkTokenMiddleware,
  fournisseurRouter
);
// demande
const demandeRouter = require("./routes/demandeRouter");
app.use(`${process.env.BASE_URL}/demande`, checkTokenMiddleware, demandeRouter);
// kanban
const kanbanRouter = require("./routes/kanbanRouter");
app.use(`${process.env.BASE_URL}/kanban`, checkTokenMiddleware, kanbanRouter);
// FRSPDT
const frspdtRouter = require("./routes/frspdtRouter");
app.use(`${process.env.BASE_URL}/frspdt`, checkTokenMiddleware, frspdtRouter);
// produit
const produitRouter = require("./routes/produitRouter");
app.use(`${process.env.BASE_URL}/produit`, checkTokenMiddleware, produitRouter);
// unite
const uniteRouter = require("./routes/uniteRouter");
app.use(`${process.env.BASE_URL}/unite`, checkTokenMiddleware, uniteRouter);
// user
// categorie
const categorieRouter = require("./routes/categorieRouteur");
app.use(
  `${process.env.BASE_URL}/categorie`,
  checkTokenMiddleware,
  categorieRouter
);
// user
const userRouter = require("./routes/userRouter");
app.use(`${process.env.BASE_URL}/users`, checkTokenMiddleware, userRouter);
// auth
const authRouter = require("./routes/authRouter.js");
// const { attachment } = require("express/lib/response");
app.use(`${process.env.BASE_URL}/auth`, authRouter);

// ++++++++++++++++++++++++++++ demmarage du serveur  ++++++++++++++++++++++++++++
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    ` ✅✅✅✅✅✅✅✅  Le serveur est demmarée sur le port : ${process.env.SERVER_PORT} ✅✅✅✅✅✅✅✅ `
  );
});

// TODO securisation de l'api et authentification 2FA

// https://blog.arcoptimizer.com/creation-de-flux-de-mots-de-passe-securises-avec-nodejs-et-mysql
