import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { User } from "../User";
import "@testing-library/jest-dom";

test("calls parent callback when userId is set", async () => {
  const setUser = jest.fn();
  const { findByPlaceholderText, findByText } = render(
    <User setUser={setUser} />
  );
  const field = await findByPlaceholderText("Username");
  fireEvent.change(field, { target: { value: "some-username" } });
  const button = await findByText("Login");
  fireEvent.click(button);
  expect(setUser).toHaveBeenCalledWith("some-username");
});

test("shows the form when user is not set", async () => {
  const { findByText } = render(<User />);
  expect(await findByText(/Login as/)).toBeVisible();
});

test("shows the username when user is set", async () => {
  const { findByText } = render(<User userId={"some-guy"} />);
  expect(await findByText(/Logged in as/)).toBeVisible();
});
