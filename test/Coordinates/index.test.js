const { Axial, Cartesian, HexCube } = require('../../lib/Coordinates');
it('Axial', () => {
  const axial = new Axial(1, 2);
  expect(axial.q).toBe(1);
  expect(axial.r).toBe(2);
});
it('Cartesian', () => {
  const cartesian = new Cartesian(1, 2);
  expect(cartesian.x).toBe(1);
  expect(cartesian.y).toBe(2);
  cartesian.y = 1;
  expect(cartesian.normalized()).toStrictEqual(
    new Cartesian(1 / Math.sqrt(2), 1 / Math.sqrt(2))
  );
});
it('HexCube', () => {
  const hex = new HexCube(1, 2, 3);
  expect(hex.x).toBe(1);
  expect(hex.y).toBe(2);
  expect(hex.z).toBe(3);
});
