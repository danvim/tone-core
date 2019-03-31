import { Axial, Protocol } from "../lib/";

test("export", () => {
  const axial = new Axial(0, 0);
  expect(axial).toBeTruthy();
  const protocol = new Protocol();
  expect(protocol).toBeTruthy();
});
