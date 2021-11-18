const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8082,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2_remote",
      remotes: {
        app1: 'app1_remote@http://localhost:8081/remoteEntry.js',
      },
    }),
  ]
};