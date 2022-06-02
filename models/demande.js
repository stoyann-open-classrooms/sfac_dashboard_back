module.exports = (sequelize, DataTypes) => {
  const Demande = sequelize.define("demande", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    urgent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    status: {
      type: DataTypes.ENUM("A traiter", "En cours", "Livrée", "Archivée"),
      defaultValue: "A traiter",
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    num_commande: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_commande: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    date_livraison: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    remarques: {
      type: DataTypes.TEXT,
      defaultValue: "Aucune remarque pour cette demande",
      allowNull: true,
    },
  });

  return Demande;
};
