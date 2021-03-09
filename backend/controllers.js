const db = require("./db");

module.exports = {
  placeOrder: (req, res) => {
    const { userId, price, amount, side } = req.body;
    const result = db.addData({ userId, price, amount, side });
    res.json({ result });
    console.log(`PLACED ${side.toUpperCase()} @ ${price} ${amount}`);
  },
  cancelOrder: (req, res) => {
    const { orderId } = req.params;
    const { side, price, amount } = db.query({ orderId });
    const result = db.removeData(orderId);
    res.json({ result: result ? "success" : "failed" });
    console.log(`CANCELLED ${side.toUpperCase()} @ ${price} ${amount}`);
  },
  getOrderbook: (req, res) => {
    const result = db.query({});
    res.json({ result });
  },
  getOrdersForUser: (req, res) => {
    const { userId } = req.params;
    const result = db.query({ userId });
    res.json({ result });
  },
};
