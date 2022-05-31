module.exports = (sequelize, DataTypes) => {
  const Fournisseur = sequelize.define("fournisseur", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nom: {
      type: DataTypes.STRING,
      defaultVAlue: "",
      allowNul: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    adresse: {
      type: DataTypes.STRING,
      defaultVAlue: "",
      allowNul: false,
    },
    site: {
      type: DataTypes.STRING,
      defaultVAlue: "",
      allowNul: true,
    },
  });

  return Fournisseur;
};
