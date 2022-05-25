module.exports = (sequelize, DataTypes) => {
  const Appareil = sequelize.define("appareil", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },

    refference: {
      type: DataTypes.STRING(45),
      defaultVAlue: "",
      allowNul: false,
    },
  });

  return Appareil;
};
