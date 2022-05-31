module.exports = (sequelize, DataTypes) => {
  const Fournisseur = sequelize.define("fournisseur", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    nom: {
      type: DataTypes.STRING(50),
      defaultVAlue: "",
      allowNul: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    adresse: {
      type: DataTypes.STRING(250),
      defaultVAlue: "",
      allowNul: false,
    },
    site: {
      type: DataTypes.STRING(100),
      defaultVAlue: "",
      allowNul: true,
    },
  });

  return Fournisseur;
};
