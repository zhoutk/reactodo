const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //抽取html
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
    filename:'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      // take all less files, compile them, and bundle them in with our js bundle
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },

        // 只对src目录里的less文件应用CSS Module,自动添加hash后缀
        { test: /\.less$/, include: [path.resolve(__dirname, 'src')], loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&modules&localIdentName=[local]-[hash:base64:5]!autoprefixer?browsers=last 2 version!less-loader') },

        { test: /\.less$/,exclude: [path.resolve(__dirname, 'src')],loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!' + 'autoprefixer-loader?browsers=last 2 version!' +`less`)},



        {
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

        // {
        //     test: /\.less$/,
        //     exclude: [path.resolve(__dirname, 'src')],
        //     loader: 'style!css!autoprefixer?browsers=last 2 version!less'
        // },


        { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
        { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url' }
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
      new ExtractTextPlugin("style.css"),
      new CopyWebpackPlugin([
          {
              context: './src/assets/images',
              from: '**/*',
              to: './assets/images'},
          {
              context: './src/assets/iconFont',
              from: '**/*',
              to: './assets/iconFont'
          },
          {
              context: './src/assets/data',
              from: '**/*',
              to: './assets/data'
          }
      ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('__DEV__'),
        PLATFORM_ENV: JSON.stringify('__WEB__'),
      },
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

      new HtmlWebpackPlugin({
              filename: './index.html', //生成的html存放路径，相对于 path
              template: './src/index.html', //html模板路径
              inject: true, //允许插件修改哪些内容，包括head与body
              hash: true, //为静态资源生成hash值
              minify: { //压缩HTML文件
                  removeComments: true, //移除HTML中的注释
                  collapseWhitespace: true  //删除空白符与换行符
              }
          }
      ),
],
};
