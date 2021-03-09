import React, { useState, useCallback, useEffect } from "react";
import { User } from "./User.jsx";
import { Order } from "./Order.jsx";
import "./App.css";
import { config } from "./config";

export const App = () => {
  const [userId, setUserId] = useState(null);
  const [orders, setOrders] = useState([]);
  const [userOrders, setUserOrders] = useState([]);

  const cancelOrder = useCallback(
    (orderId) => {
      fetch(`${config.baseUrl}/cancelOrder/${orderId}`, { method: "DELETE" });
    },
    [userId]
  );

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(`${config.baseUrl}/getOrderbook`);
      const json = await result.json();
      setOrders(json.result);
    };
    getData();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const getData = async () => {
      const result = await fetch(
        `${config.baseUrl}/getOrdersForUser/${userId}`
      );
      const json = await result.json();
      setUserOrders(json.result);
    };
    getData();
  }, [userId]);

  return (
    <div className="app">
      <h1>Orderbook</h1>
      <div className="user panel">
        <User setUser={setUserId} userId={userId}></User>
      </div>
      <div className="panels">
        <div className="left-panel">
          <div className="place-order panel">
            <h2>Place order</h2>
            <Order userId={userId}></Order>
          </div>
          <div className="user-orders panel">
            <h2>Your orders</h2>
            <ol>
              {userOrders
                .slice()
                .reverse()
                .map(({ orderId, side, price, amount }) => (
                  <li>
                    {side} @ {price}, {amount}{" "}
                    <button onClick={() => cancelOrder(orderId)}>Cancel</button>
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className="right-panel">
          <div className="orders panel">
            <h2>Open orders</h2>
            {orders
              .slice()
              .reverse()
              .map(({ side, price, amount }) => (
                <li>
                  {side} @ {price}, {amount}
                </li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
