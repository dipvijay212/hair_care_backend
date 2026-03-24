const Order = require('../models/Order');

// @desc    Create new order
// @route   POST /api/orders
// @access  Public
const createOrder = async (req, res) => {
    try {
        const { customer, items, total } = req.body;

        if (items && items.length === 0) {
            return res.status(400).json({ message: 'No order items' });
        } else {
            const order = new Order({
                customer,
                items,
                total
            });

            // 1. Order should be stored in MongoDB
            const createdOrder = await order.save();

            // 4. Send success response back to the user instantly
            res.status(201).json(createdOrder);
        }
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createOrder, getOrders };
