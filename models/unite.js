module.exports = (sequelize, DataTypes) => {
  const Unite = sequelize.define("unite", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    unite: {
      type: DataTypes.STRING,
      defaultVAlue: "",
      unique: true,
      allowNul: false,
    },
    abreviation: {
      type: DataTypes.STRING,
      defaultVAlue: "",
      unique: true,
      allowNul: false,
    },
  });

  return Unite;
};
