var protobuf = require("protobufjs");

it("hello", () => {
  protobuf.load("hello.proto", function(err, root) {
    if (err) throw err;

    // Obtain a message type
    var HelloMessage = root.lookupType("hellopackage.HelloMessage");

    // Exemplary payload
    var payload = { message: "Hello World" };

    // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
    var errMsg = HelloMessage.verify(payload);
    if (errMsg) throw Error(errMsg);

    // Create a new message
    var message = HelloMessage.create(payload); // or use .fromObject if conversion is necessary

    // Encode a message to an Uint8Array (browser) or Buffer (node)
    var buffer = HelloMessage.encode(message).finish();
    // ... do something with buffer

    // Decode an Uint8Array (browser) or Buffer (node) to a message
    var message = HelloMessage.decode(buffer);
    // ... do something with message

    expect(payload).toMatchObject(message);

    // If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.

    // Maybe convert the message back to a plain object
    var object = HelloMessage.toObject(message, {
      longs: String,
      enums: String,
      bytes: String
      // see ConversionOptions
    });
  });
});
