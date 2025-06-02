const db = require('../models');
const Order = db.Order;
const Product = db.Product;

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ include: Product });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { productId, user, quantity } = req.body;
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const totalPrice = product.price * quantity;
    const order = await Order.create({ productId, user, quantity, totalPrice });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};