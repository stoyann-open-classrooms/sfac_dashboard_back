const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
///====================== synchronisation des models
db.users = require("./user.js")(sequelize, DataTypes);

db.demandes = require("./demande")(sequelize, DataTypes);
db.fournisseurs = require("./fournisseur")(sequelize, DataTypes);
db.frspdts = require("./frspdt")(sequelize, DataTypes);
db.kanbans = require("./kanban")(sequelize, DataTypes);
db.produits = require("./produit")(sequelize, DataTypes);
db.categories = require("./produitCategorie")(sequelize, DataTypes);
db.unites = require("./unite")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("base de donnée synchroniser!");
});

// ================= RELATIONS OK =============

// 1 to many relation  between fournisseurs et produits
db.fournisseurs.hasMany(db.produits, {});
db.produits.belongsTo(db.fournisseurs, {});

// 1 to many relation between produits et kanbans

db.produits.hasMany(db.kanbans, {});
db.kanbans.belongsTo(db.produits, {});

// 1 to many relation between kanbans et demandes

db.kanbans.hasMany(db.demandes, {});
db.demandes.belongsTo(db.kanbans, {});

// 1 to many relation between unites et FRSPDT

db.unites.hasMany(db.frspdts, {});
db.frspdts.belongsTo(db.unites, {});
// 1 to many relation between categories et produit

db.categories.hasMany(db.produits, {});
db.produits.belongsTo(db.categories, {});

// 1 To 1 between produits et FRSPDT
db.produits.hasOne(db.frspdts, {
  foreignKey: {
    type: DataTypes.INTEGER,
  },
});
db.frspdts.belongsTo(db.produits, {});

module.exports = db;
