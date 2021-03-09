const {
  placeOrder,
  cancelOrder,
  getOrderBook,
  getOrdersForUser,
} = require("../controllers");
const router = express.Router();

router.post("/placeOrder", placeOrder);
router.put("/cancelOrder", cancelOrder);
router.get("/getOrderBook", getOrderBook);
router.get("/getOrdersForUser", getOrdersForUser);

module.exports = {
  router,
};
