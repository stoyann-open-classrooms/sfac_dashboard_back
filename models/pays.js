module.exports = (sequelize, DataTypes) => {
  const Pays = sequelize.define("pays", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(10),
      defaultVAlue: "",
      unique: true,
      allowNul: false,
    },
  });

  return Pays;
};
