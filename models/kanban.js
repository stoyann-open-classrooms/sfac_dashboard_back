module.exports = (sequelize, DataTypes) => {
  const Kanban = sequelize.define("kanban", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    uid_nfc: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Kanban;
};
