const Protocol = require("./Protocol");

const main = async () => {
  await Protocol.init();
  Protocol.encodeMessage("hello");
};

module.exports = { Protocol };
