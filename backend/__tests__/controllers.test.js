const {
  placeOrder,
  cancelOrder,
  getOrderbook,
  getOrdersForUser,
} = require("../controllers");

const db = require("../db");

let mockResponse = {};

beforeEach(() => {
  db.addData = jest.fn();
  db.removeData = jest.fn();
  db.getOrderbook = jest.fn();
  db.getOrdersForUser = jest.fn();
  db.query = jest.fn();
  mockResponse.json = jest.fn();
});

it("places an order and return ID", () => {
  db.addData = jest.fn(() => 123);

  placeOrder(
    { body: { userId: 1, price: 100, side: "buy", amount: 10 } },
    mockResponse
  );

  expect(db.addData).toHaveBeenCalledWith({
    userId: 1,
    price: 100,
    amount: 10,
    side: "buy",
  });
  expect(mockResponse.json).toHaveBeenCalledWith({ result: 123 });
});

it("cancels an order using the ID", () => {
  db.query = jest.fn(() => ({ side: "ask", amount: 11, price: 11 }));
  db.removeData = jest.fn(() => true);
  cancelOrder({ params: { orderId: 1 } }, mockResponse);
  expect(mockResponse.json).toHaveBeenCalledWith({ result: "success" });
});

it("gets a list of all orders", () => {
  db.query = jest.fn(() => [
    { userId: 1, price: 100, side: "buy", amount: 10 },
    { userId: 2, price: 50, side: "sell", amount: 10 },
  ]);
  getOrderbook({}, mockResponse);
  expect(db.query).toHaveBeenCalledTimes(1);
  expect(mockResponse.json).toHaveBeenCalledWith({
    result: [
      { userId: 1, price: 100, side: "buy", amount: 10 },
      { userId: 2, price: 50, side: "sell", amount: 10 },
    ],
  });
});

it("gets a list of all orders for the specified user", () => {
  db.query = jest.fn(() => [
    { userId: 1, price: 100, side: "buy", amount: 10 },
  ]);
  getOrdersForUser({ params: { userId: 1 } }, mockResponse);
  expect(db.query).toHaveBeenCalledWith(1);
  expect(mockResponse.json).toHaveBeenCalledWith({
    result: [{ userId: 1, price: 100, side: "buy", amount: 10 }],
  });
});
