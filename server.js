const express = require("express");

const cors = require("cors");

const app = express();
// middleware
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers
const fournisseurRouter = require("./routes/fournisseurRouter");
app.use(`${process.env.BASE_URL}/fournisseur`, fournisseurRouter);
const demandeRouter = require("./routes/demandeRouter");
app.use(`${process.env.BASE_URL}/demande`, demandeRouter);
const kanbanRouter = require("./routes/kanbanRouter");
app.use(`${process.env.BASE_URL}/kanban`, kanbanRouter);
const frspdtRouter = require("./routes/frspdtRouter");
app.use(`${process.env.BASE_URL}/frspdt`, frspdtRouter);
const produitRouter = require("./routes/produitRouter");
app.use(`${process.env.BASE_URL}/produit`, produitRouter);
const uniteRouter = require("./routes/uniteRouter");
app.use(`${process.env.BASE_URL}/unite`, uniteRouter);
const paysRouter = require("./routes/paysRouter");
app.use(`${process.env.BASE_URL}/pays`, paysRouter);
const userRouter = require("./routes/userRouter");
app.use(`${process.env.BASE_URL}/users`, userRouter);
const authRouter = require("./routes/authRouter.js");
app.use(`${process.env.BASE_URL}/auth`, authRouter);

//static Images Folder

app.use("/Images", express.static("./Images"));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server is running on port ${process.env.SERVER_PORT}`);
});
