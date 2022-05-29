import { csp } from "../dist";
test("border loaded", () => {
  expect(csp().Border);
});

test("border color check", () => {
  expect(csp().Border.color("red").csp).toStrictEqual({ borderColor: "red" });
});

test("border color & border width", () => {
  expect(csp().Border.color("blue").width(100).csp).toStrictEqual({ borderWidth: 100, borderColor: "blue" });
});

test("border color & border radius & border width", () => {
  expect(csp().Border.radius(10).color("black").width(50).csp).toStrictEqual({ borderRadius: 10, borderColor: "black", borderWidth: 50 });
});

test("border all loop", () => {
  expect(csp().Border.BorderBottom.BorderLeft.BorderRight.BorderTop.csp);
});
