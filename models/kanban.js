module.exports = (sequelize, DataTypes) => {
  const Kanban = sequelize.define("kanban", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    produit_id: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
    appareil_id: {
      type: DataTypes.INTEGER(10),
      allowNul: true,
    },
    uid_nfc: {
      type: DataTypes.STRING(50),
      defaultVAlue: "",
      allowNul: false,
    },
  });

  return Kanban;
};
