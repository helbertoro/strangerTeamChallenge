# Webpack configuration.

Basic configuration to start a basic [React](https://reactjs.org/)  project using [Webpack](https://webpack.js.org/), 
includes the configuration of webpack-dev-server and json-server for consume a json for tests in the port 3001.

### Loaders
- [css-loader](https://github.com/webpack-contrib/css-loader)
- [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [style-loader](https://github.com/webpack-contrib/style-loader)
- [url-loader](https://github.com/webpack-contrib/url-loader)

### Plugins 
- [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin)

### Servers
- [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
- [json-server](https://github.com/typicode/json-server)


## Getting start
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation
Requires [Node.js]() v6.4.1.
```sh
git clone https://github.com/bautistaj/basic-config-webpack.git
cd basic-config-webpack
npm install
npm run start
```
### Configuration json-server
Only change the db.json in the directory server with your own structure.

### Running
Start webpack-dev-server and json-server with next script.
```sh
npm run start
```

Start only webpack-dev-server.
```sh
npm run build:dev
```

### Testing
http://localhost:8080/
http://localhost:3001/
http://localhost:3001/test

License
-
MIT