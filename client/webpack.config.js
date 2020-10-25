const path = require('path');
const webpack = require('webpack');




/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
entry : "./src/code/main.tsx",
resolve : {
extensions : [ ".ts", ".tsx", ".js" ]
},
module : {
rules : [
{
test: /\.png$/,
use : { loader : "url-loader",
options : { limit : 65536, esModule : false, }
}
},

{
test : /\.html$/,
use : { loader : "html-loader" }
},
{
test : /\.css$/,
use : [ "style-loader", "css-loader"]
},
{
test : /\.tsx?$/,
loader: 'awesome-typescript-loader'
}
]
},
plugins : [
new HtmlWebPackPlugin({ template : "./src/index.html", filename : "./index.html" })
],
performance : { hints : false },
watch : false,
devtool : "source-map"
};

