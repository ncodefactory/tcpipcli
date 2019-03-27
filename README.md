# tcpipcli #

## installation: ##

### npm: ###
```
npm install @ncodefactory/tcpipcli --save
```

### yarn: ###
```
yarn add @ncodefactory/tcpipcli
```

## usage: ##

```js
import tcpipcli from '@ncodefactory/tcpipcli';

const host = 'localhost';
const port = 5000;
const timeout = 3000; // milliseconds

const client = tcpipcli(host, port, timeout);

const requestData = [74, 32, 91];
const request = Buffer.from(requestData); // request must have the Buffer type https://nodejs.org/dist/latest-v10.x/docs/api/buffer.html

const response = await client(request);

```
