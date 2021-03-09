const db = require("./db");

module.exports = {
  placeOrder: (req, res) => {
    console.log(req.body);
    const { userId, price, amount, side } = req.body;
    const result = db.addData({ userId, price, amount, side });
    res.json({ result });
  },
  cancelOrder: (req, res) => {
    const { orderId } = req.params;
    const result = db.removeData(orderId);
    res.json({ result: result ? "success" : "failed" });
  },
  getOrderbook: (req, res) => {
    const result = db.query({});
    res.json({ result });
  },
  getOrdersForUser: (req, res) => {
    const { userId } = req.params;
    const result = db.query(userId);
    res.json({ result });
  },
};
