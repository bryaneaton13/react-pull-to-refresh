var path = require('path');
var webpack = require('webpack');
var BASE_DIR = './'
var COMPONENT_NAME = 'react-pull-to-refresh';
var plugins = [];

function getPackageMain() {
  return require(path.resolve('./package.json')).main;
}

if (process.env.MINIFY) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
  COMPONENT_NAME += '.min';
}
module.exports = {
  entry: path.resolve(getPackageMain()),
  output: {
    filename: path.resolve('./dist/' + COMPONENT_NAME + '.js'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react/addons': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: plugins
};
