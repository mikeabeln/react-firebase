# Webpack-React-Build

A starter project for React using Webpack

## Software versions
Node 6.11.5
ESLint
Yarn
Firebase Tools

## Quick Start
First:
```
npm i -g firebase-tools && firebase login
```
Then:
```
yarn && yarn dev
```

## Setup
Install dependencies:
```
yarn install
```

## Development
Start development server:
```
yarn dev
```
With IP works across all network devices, for example:
If my IP is 127.0.0.1
Enter into the browser address field 127.0.0.1:9000

The development server will proxy requests to port 5000

To emulate your firebase backend, open a new terminal window and:
```
cd server
```
Then:
```
firebase serve
```
This will serve the production build at port 5000, note that firebase emulations have trouble with http requests from the production build, so send them from the webpack-dev-server proxied to the firebase emulation.


## Build
Create production build:
```
yarn build
```

## Production
```
yarn start or npm start
```

## Production
```
yarn deploy
```

## TODO
CSS grid implementation
CSS modules
