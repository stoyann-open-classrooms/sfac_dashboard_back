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
      unique: true,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "Ce produit ne possède aucune description",
      allowNull: true,
    },
  });

  return Produit;
};
