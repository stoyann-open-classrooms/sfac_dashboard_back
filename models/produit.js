module.exports = (sequelize, DataTypes) => {
  const Produit = sequelize.define("produit", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
    },

    refference: {
      type: DataTypes.STRING(50),
      defaultVAlue: "",
      unique: true,
      allowNul: false,
    },
    designation: {
      type: DataTypes.STRING(250),
      defaultVAlue: "",
      allowNul: false,
    },
  });

  return Produit;
};
