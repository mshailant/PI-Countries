const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.ENUM,
      values: ["1", "2", "3", "4", "5"],
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM,
      values: ["Winter", "Summer", "Autumn", "Spring"],
      allowNull: false,
    },
  });
};
