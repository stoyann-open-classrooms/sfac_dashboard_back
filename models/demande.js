module.exports = (sequelize, DataTypes) => {
  const Demande = sequelize.define("demande", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    appareil_id: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
    kanban_id: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
    unite_id: {
      type: DataTypes.INTEGER(10),
      allowNul: true,
    },
    frspdt_id: {
      type: DataTypes.INTEGER(10),
      allowNul: true,
    },
    date_demande: {
      type: DataTypes.DATE,
      allowNul: false,
    },
    date_commande: {
      type: DataTypes.DATE,
      allowNul: true,
    },
    date_livraison: {
      type: DataTypes.DATE,
      allowNul: true,
    },
    num_commande: {
      type: DataTypes.STRING(50),
      allowNul: true,
    },

    urgent: {
      type: DataTypes.BOOLEAN,
      allowNul: true,
    },
  });

  return Demande;
};
