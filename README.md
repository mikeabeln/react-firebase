# Webpack-React-Build

A starter project for React using Webpack

## Software versions
Node 8.9.1
ESLint
Yarn or npm

## Quick Start
```
yarn && yarn dev
```

## Setup
Install dependencies:
```
yarn or npm install
```
(May need to install flexboxgrid before webpack to avoid dependency error)
(Might also move to css grid implementation)

## Development
Start development server, build project, and watch files:
```
yarn dev or npm run dev
```
With IP works across all network devices, for example:
If my IP is 127.0.0.1
Enter into the browser address field 127.0.0.1:9000


## Production

Set up a Mongo database, and grab the database's URI

Add a config.json file in the root of the server directory with:
```
{
  "mongoUri": "YOUR_MONGO_URI",
}
```
then in your terminal:

```
yarn start or npm start
```
