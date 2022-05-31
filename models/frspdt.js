module.exports = (sequelize, DataTypes) => {
  const Frspdt = sequelize.define("frspdt", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    delai_jour: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
    quantite_min: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
    quantite_unite: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
  });

  return Frspdt;
};
