const path = require('path');
const webpack = require('webpack');

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
      },{
        test: /\.json$/,
        loader: "json",
      },{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015',"stage-0", 'react'],
          plugins: [['react-transform', {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              // this is important for Webpack HMR:
              locals: ['module']
            }],
          }],["import", { libraryName: "antd", style: "css" }]
          ],
          cacheDirectory: true
        },
      },
        {
            test: /\.css$/,
            loader: 'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },

    ],
  },
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.json'],
    },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};