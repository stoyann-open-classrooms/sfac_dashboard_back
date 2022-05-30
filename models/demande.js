module.exports = (sequelize, DataTypes) => {
  const Demande = sequelize.define("demande", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    kanban_id: {
      type: DataTypes.INTEGER(10),
      allowNul: false,
    },
    date_demande: {
      type: DataTypes.DATE,
      allowNul: false,
    },
    urgent: {
      type: DataTypes.BOOLEAN,
      allowNul: true,
    },
    quantite: {
      type: DataTypes.INTEGER(10),
      allowNul: true,
    },
    num_commande: {
      type: DataTypes.STRING(50),
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
    frspdt_id: {
      type: DataTypes.INTEGER(10),
      allowNul: true,
    },
  });

  return Demande;
};
