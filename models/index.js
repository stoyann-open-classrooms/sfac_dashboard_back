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

db.demandes = require("./demande")(sequelize, DataTypes);
db.fournisseurs = require("./fournisseur")(sequelize, DataTypes);
db.frspdts = require("./frspdt")(sequelize, DataTypes);
db.kanbans = require("./kanban")(sequelize, DataTypes);
db.produits = require("./produit")(sequelize, DataTypes);
db.unites = require("./unite")(sequelize, DataTypes);
db.payss = require("./pays")(sequelize, DataTypes);
db.appareils = require("./appareil")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("base de donnée synchroniser!");
});

// // ================ todo = mise en place des relations

// 1 to many relation between appareils et kanbans

db.appareils.hasMany(db.kanbans, {
  foreignKey: "appareil_id",
  as: "kanban",
});
db.kanbans.belongsTo(db.appareils, {
  foreignKey: "appareil_id",
  as: "appareil",
});

module.exports = db;
