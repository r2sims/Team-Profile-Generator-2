const { test, expect } = require("@jest/globals");
const Employee = require("../library/Employee");

test("Can make employee object", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
test("set name", () => {
  const name = "Bruce";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
test("set id", () => {
  const id = 10;
  const e = new Employee("jdd", id);
  expect(e.id).toBe(id);
});
test("set email", () => {
  const email = "brucewayne@darkknight.com";
  const e = new Employee("jdd", 10, email);
  expect(e.email).toBe(email);
});
test("get name", () => {
  const name = "Bruce";
  const e = new Employee(name, 10, "email");
  expect(e.getName()).toBe(name);
});
test("get id", () => {
  const id = 10;
  const e = new Employee("jdd", 10, id);
  expect(e.getId()).toBe(id);
});
test("get email", () => {
  const email = "brucewayne@darkknight.com";
  const e = new Employee("jdd", 10, email);
  expect(e.getEmail()).toBe(email);
});
test("get role", () => {
  const role = "Employee";
  const e = new Employee("jdd", 10, "email");
  expect(e.getRole()).toBe(role);
});