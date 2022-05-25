import { csp } from "../dist";
test("transition loaded", () => {
  expect(csp().Transition);
});
