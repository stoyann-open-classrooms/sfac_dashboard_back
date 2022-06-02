module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define("categorie", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categorie: {
      type: DataTypes.STRING,
      defaultValue: "divers",
      unique: true,
      allowNull: false,
    },
  });

  return Categorie;
};
