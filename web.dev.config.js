const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkgPath = require('./package.json');
let theme = {'primary-color': '#2e04fe'};
var autoprefixer = require('autoprefixer')

// if (pkgPath.theme && typeof(pkgPath.theme) === 'object') {
//     theme = pkgPath.theme;
// }

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true',
    'babel-polyfill',
    path.join(__dirname, 'src/index'),
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      // take all less files, compile them, and bundle them in with our js bundle
      {
        test: /\.less$/,
        loader: 'style!css!autoprefixer?browsers=last 2 version!less'
      },
        {
        test: /\.json$/,
        loader: "json",
      },{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015',"stage-2", 'react'],
          plugins: [['react-transform', {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              // this is important for Webpack HMR:
              locals: ['module']
            }],
          }], ["import", { libraryName: "antd", style: true }]
          ],
        },
      },
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },

        // 只对src目录里的less文件应用CSS Module,自动添加hash后缀
        { test: /\.less$/, include: [path.resolve(__dirname, 'src')], loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'less-loader') },

        { test: /\.less$/,exclude: [path.resolve(__dirname, 'src')],loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!' + 'autoprefixer-loader!' +`less`)},

        // {
        //     test: /\.less$/,
        //     loader: ExtractTextPlugin.extract(
        //         'css-loader?importLoaders=2&sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!' +
        //         'postcss!' +
        //         `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
        //     ),
        // },
    ],
  },
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, './node_modules')],
        extensions: ['', '.js', '.jsx']
    },

    resolveLoader:{
        modulesDirectories: ['node_modules', path.join(__dirname, './node_modules')],
    },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('__DEV__'),
        PLATFORM_ENV: JSON.stringify('__WEB__'),
      },
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin("[name].css"),
],
};
