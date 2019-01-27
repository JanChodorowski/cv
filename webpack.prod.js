const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: { // this is set not to minimize 
    minimizer: [],
  },

  plugins: [
    // new ExtractTextPlugin('styles.css'),
    new OptimizeCssAssetsPlugin(
    //   {
    //   assetNameRegExp: /\.optimize\.css$/g,
    //   cssProcessor: require('cssnano'),
    //   cssProcessorPluginOptions: {
    //     preset: ['default', { discardComments: { removeAll: true } }],
    //   },
    //   canPrint: true
    // }
    )
  ]

});

//add tree shaking
