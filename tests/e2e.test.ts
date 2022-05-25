import { ChainedFlexBox } from "../dist/class/flex-box";
import { csp } from "../dist/index";

test("csp loaded", () => {
  expect(csp);
});

test("border=>Disp ", () => {
  expect(csp().Border.Flex).toBeInstanceOf(ChainedFlexBox);
});

test("extend=>Elm=>end", () => {
  const extend = { borderWidth: 1 };
  expect(csp(extend).Elm.csp).toStrictEqual(extend);
});

test("extend=>extend=>inject=>flex=>end", () => {
  const start = { width: 1 };
  const middle = { height: 100 };
  const end = { ...start, ...middle, ...{ display: "flex" } };
  const point = csp(start).Border.csp;
  expect(csp(point).Border.injectProps(middle).Flex.csp).toStrictEqual(end);
});

test("loop around all claases", () => {
  expect(csp({ width: 300 }).Position.Elm.Flex.Position.Size.Text.csp).toStrictEqual({ width: 300, display: "flex" });
});
