const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    app1_remote: './src/utils.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8081,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1_remote",
      filename: "remoteEntry.js",
      exposes: {
        './utils': "./src/utils",
      },
    }),
  ]
};