const db = require("../db");

test("it should add data", () => {
  db.addData("some data");
  db.addData({ a: 1 });
  expect(db.getData(0)).toBe("some data");
  expect(db.getData(1)).toEqual({ a: 1 });
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
