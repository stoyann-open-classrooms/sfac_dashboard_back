module.exports = (sequelize, DataTypes) => {
  const Frspdt = sequelize.define("frspdt", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    id_fournisseur: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
    id_produit: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },

    delai_jour: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
    quantite_min: {
      type: DataTypes.INTEGER(10),

      allowNul: true,
    },
    quantite_unite: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
    id_unite: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
  });

  return Frspdt;
};
