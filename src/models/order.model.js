module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });



return Order;
};