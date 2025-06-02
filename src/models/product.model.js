module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      foreignKey: 'productId'

    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
      allowNull: false
    },
    
  });
  return Product;
};

