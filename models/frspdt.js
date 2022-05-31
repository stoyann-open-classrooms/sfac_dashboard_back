module.exports = (sequelize, DataTypes) => {
  const Frspdt = sequelize.define("frspdt", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    delai_jour: {
      type: DataTypes.INTEGER,
      allowNul: false,
    },
    quantite_min: {
      type: DataTypes.INTEGER,
      allowNul: false,
    },
    quantite_unite: {
      type: DataTypes.INTEGER,
      allowNul: false,
    },
  });

  return Frspdt;
};
