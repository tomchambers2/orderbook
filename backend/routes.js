const express = require("express");
const {
  placeOrder,
  cancelOrder,
  getOrderbook,
  getOrdersForUser,
} = require("./controllers");
const router = express.Router();

router.post("/placeOrder", placeOrder);
router.delete("/cancelOrder/:orderId", cancelOrder);
router.get("/getOrderbook", getOrderbook);
router.get("/getOrdersForUser/:userId", getOrdersForUser);

module.exports = {
  router,
};
