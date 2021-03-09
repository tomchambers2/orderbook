import React from 'react';
import './App.css'

export const App = () => {
    return <div className="app">
        <h1>Orderbook</h1>
        <div className="user panel"><h2>User</h2>Login as: </div>
        <div className="panels">
            <div className="left-panel">
                <div className="place-order panel"><h2>Place order</h2></div>
                <div className="user-orders panel"><h2>Your orders</h2></div>
            </div>
            <div className="right-panel">
                <div className="orders panel"><h2>Open orders</h2></div>
            </div>
        </div>
  </div>
};
