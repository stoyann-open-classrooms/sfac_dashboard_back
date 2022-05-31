module.exports = (sequelize, DataTypes) => {
  const Produit = sequelize.define("produit", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
    },

    refference: {
      type: DataTypes.STRING,
      defaultVAlue: "",
      unique: true,
      allowNul: false,
    },
    designation: {
      type: DataTypes.STRING,
      defaultVAlue: "",
      allowNul: false,
    },
  });

  return Produit;
};
