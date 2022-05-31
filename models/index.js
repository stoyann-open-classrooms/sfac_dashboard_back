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
db.unites = require("./unite")(sequelize, DataTypes);
db.payss = require("./pays")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("base de donnée synchroniser!");
});

// ================= RELATIONS OK =============
// 1 to many relation kanban et demandes

// db.kanbans.hasMany(db.demandes, {
//   foreignKey: "kanban_id",
//   as: "kanban",
// });
// db.demandes.belongsTo(db.kanbans, {
//   foreignKey: "kanban_id",
//   as: "kanban",
// });

// // // ================ todo = mise en place des relations
// // 1 to many relation between appareils et kanbans

// db.appareils.hasMany(db.kanbans, {
//   foreignKey: "appareil_id",
//   as: "kanban",
// });
// db.kanbans.belongsTo(db.appareils, {
//   foreignKey: "appareil_id",
//   as: "appareil",
// });

// 1 to many relation between fournisseur et pays

db.payss.hasMany(db.fournisseurs, {});
db.fournisseurs.belongsTo(db.payss, {});

// 1 to many relation between fournisseur et produits

db.fournisseurs.hasMany(db.produits, {});
db.produits.belongsTo(db.fournisseurs, {});

// 1 to many relation between kanban et produit

db.produits.hasMany(db.kanbans, {});
db.kanbans.belongsTo(db.produits, {});

// 1 to many relation between demande et kanban

db.kanbans.hasMany(db.demandes, {});
db.demandes.belongsTo(db.kanbans, {});
// 1 to many relation between demande et kanban

db.unites.hasMany(db.frspdts, {});
db.frspdts.belongsTo(db.unites, {});
db.produits.hasOne(db.frspdts, {});
db.frspdts.belongsTo(db.produits, {});

module.exports = db;
