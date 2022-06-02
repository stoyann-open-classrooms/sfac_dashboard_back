module.exports = (sequelize, DataTypes) => {
  const Frspdt = sequelize.define("frspdt", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    delai_jour: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantite_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantite_unite: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Frspdt;
};
