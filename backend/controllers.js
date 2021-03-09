const db = require("./db");

module.exports = {
  placeOrder: (req, res) => {
    const { userId, price, amount, side } = req.data;
    const result = db.addData({ userId, price, amount, side });
    res.json({ result });
  },
  cancelOrder: (req, res) => {
    const { orderId } = req.data;
    const result = db.removeData(orderId);
    res.json({ result: result ? "success" : "failed" });
  },
  getOrderBook: (req, res) => {
    const result = db.query();
    res.json({ result });
  },
  getOrdersForUser: (req, res) => {
    const { userId } = req.data;
    const result = db.query(userId);
    res.json({ result });
  },
};
