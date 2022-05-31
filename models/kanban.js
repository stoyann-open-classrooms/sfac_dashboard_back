module.exports = (sequelize, DataTypes) => {
  const Kanban = sequelize.define("kanban", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    uid_nfc: {
      type: DataTypes.STRING(50),
      defaultVAlue: "",
      allowNul: false,
      unique: true,
    },
  });

  return Kanban;
};
