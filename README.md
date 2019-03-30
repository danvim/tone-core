# tone-core

This repo contains data-structure for tone-server and tone.

## Protocol Usage

You may refer to `/test/server.js` as a demo

```js
const Protocol = require("tone-core/Protocol").default;
const { PackageTypes } = require("tone-core/Protocol/PackageTypes");
const protocol1 = new Protocol();
protocol1.add(conn); //conn is a PeerJS dataconnection

//listening to message event
protocol1.on(PackageTypes.Message, messageObject => {
  console.log(messageObject.content);
});

//in another protocol2 emit a message event to protocol1
protocol2.emit(PackageTypes.Message, { content: "Hello world" });
```

## Development

### Start a Typescript watcher to live compile code

compile to `/dist`

```sh
npm run watch
```

### Testing(jest)

all test are in `/test`

```sh
npm run test
```

### Testing(peerjs)

peerJS is not testable using jest :(
this will basically start an express server just for testing server

```sh
  npm run serve
```
