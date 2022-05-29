import { csp } from "../dist";
test("flex loaded", () => {
  expect(csp().Flex);
});

test("flex looping", () => {
  const chains = csp().Flex.column.leftAlign.topAlign.bottomAlign.centerAlign.verticalCenterAlign.horizontalCenterAlign.csp;
  expect(chains).toBeTruthy();
});
