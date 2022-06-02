module.exports = (sequelize, DataTypes) => {
  const Fournisseur = sequelize.define("fournisseur", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      defaultValue: null, // allowNull: true,
      // validate: {
      //   isEmail: true,
      // },
    },

    nom: {
      type: DataTypes.STRING,
      defaultVAlue: "",
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    adresse: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
  });

  return Fournisseur;
};
