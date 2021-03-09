const db = require("../db");

test("it should add data", () => {
  db.addData("some data");
  db.addData({ userId: "a" });
  expect(db.getData(0)).toBe("some data");
  expect(db.getData(1)).toEqual({ userId: "a" });
});

test("it should return the id of the data", () => {
  expect(db.addData("some data")).toBe(2);
});

test("it should remove data", () => {
  db.getData(0);
  db.getData(1);
  db.removeData(0);
  expect(db.getData(0)).toBeNull();
});

test("it should get all data", () => {
  expect(db.query().length).toEqual(3);
});

test("it should get data for a user", () => {
  db.addData({ userId: "b" });
  expect(db.query({ userId: "b" }).length).toEqual(1);
  expect(db.query({ userId: "c" }).length).toEqual(0);
  db.addData({ userId: "b" });
  expect(db.query({ userId: "b" }).length).toEqual(2);
});
