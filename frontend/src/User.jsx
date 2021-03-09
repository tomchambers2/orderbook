import React, { useState } from "react";

export const User = ({ setUser, userId }) => {
  const [newUserId, setNewUserId] = useState("");

  return (
    <>
      <h2> User </h2>
      {userId ? (
        <div>Logged in as {userId}</div>
      ) : (
        <div>
          Login as:{" "}
          <input
            placeholder="Username"
            value={newUserId}
            onChange={({ target: { value } }) => setNewUserId(value)}
          ></input>
          <button onClick={() => setUser(newUserId)}>Login</button>
        </div>
      )}
    </>
  );
};
