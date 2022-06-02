module.exports = (sequelize, DataTypes) => {
  const Unite = sequelize.define("unite", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    unite: {
      type: DataTypes.STRING,
      defaultValue: "",
      unique: true,
      allowNull: false,
    },
    abreviation: {
      type: DataTypes.STRING,
      defaultValue: "",
      unique: true,
      allowNull: false,
    },
  });

  return Unite;
};
