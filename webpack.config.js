// webpack.config.js
var webpack = require('webpack')
module.exports = {
  devtool: 'eval',
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET)
    })
 ]
};