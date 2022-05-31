module.exports = (sequelize, DataTypes) => {
  const Unite = sequelize.define("unite", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(25),
      defaultVAlue: "",
      unique: true,
      allowNul: false,
    },
  });

  return Unite;
};
