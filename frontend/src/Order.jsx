import React, { useState } from "react";
import { config } from "./config";

export const Order = ({ userId }) => {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [side, setSide] = useState("ask");

  const placeOrder = (e) => {
    e.preventDefault();

    fetch(`${config.baseUrl}/placeOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, price, amount, side }),
    });
  };

  return (
    <div>
      <form>
        Price:{" "}
        <input
          value={price}
          onChange={({ target: { value } }) => setPrice(value)}
        ></input>
        Amount:{" "}
        <input
          value={amount}
          onChange={({ target: { value } }) => setAmount(value)}
        ></input>
        <select
          value={side}
          onChange={({ target: { value } }) => setSide(value)}
        >
          <option value="ask">ASK</option>
          <option value="bid">BID</option>
        </select>
        <button onClick={placeOrder} disabled={!userId || !price || !amount}>
          Place order
        </button>
      </form>
    </div>
  );
};
