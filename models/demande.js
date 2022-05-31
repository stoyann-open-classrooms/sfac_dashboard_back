module.exports = (sequelize, DataTypes) => {
  const Demande = sequelize.define("demande", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    date_demande: {
      type: DataTypes.DATE,
      allowNul: false,
    },
    urgent: {
      type: DataTypes.BOOLEAN,
      allowNul: true,
    },
    status: {
      type: DataTypes.ENUM("A traiter", "En cours", "livrée", "Archivée"),
      defaultValue: "A traiter",
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNul: true,
    },
    num_commande: {
      type: DataTypes.STRING,
      allowNul: true,
    },
    date_commande: {
      type: DataTypes.DATE,
      allowNul: true,
    },
    date_livraison: {
      type: DataTypes.DATE,
      allowNul: true,
    },
  });

  return Demande;
};
