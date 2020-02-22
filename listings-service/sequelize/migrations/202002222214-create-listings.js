module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "listings",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      createdAt: {
        allowNull: false,
        tyoe: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        tyoe: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        tyoe: DataTypes.DATE
      }
    },
    {
      charset: "utf8"
    }
  );
};
