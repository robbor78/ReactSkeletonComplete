const commonConfig = require("./webpack.config.js");
const webpackMerge = require('webpack-merge');

module.exports = function (env) {
  return webpackMerge(commonConfig("production"));
};