const { UPPER_SNAKE2UpperCamel } = require("../dist/helper");

describe("UPPER_SNAKE2UpperCamel", () => {
  it("with _", () => {
    expect(UPPER_SNAKE2UpperCamel("HELLO_WORLD")).toBe("HelloWorld");
  });
  it("no _", () => {
    expect(UPPER_SNAKE2UpperCamel("HELLO")).toBe("Hello");
  });
});
