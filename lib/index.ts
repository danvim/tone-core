const Protocol = require("./Protocol");

const main = async () => {
  await Protocol.init();
  console.log(Protocol);
  Protocol.encodeMessage("hello");
};

module.exports = { Protocol };
