const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

const config = {
  entry: './resources',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'js/app.js',
    publicPath: '/assets/'
  },
  mode: isProduction ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.scss']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: isProduction ? { discardComments: { removeAll: true } } : false
            }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [
              require('autoprefixer')({ flexbox: 'no-2009' }),
            ]
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      })
    }, {
      test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }]
    }, {
      test: /\.(png|jpe?g|gif|svg|ico)(\?v=.+)?$/,
      exclude: /(\/fonts)/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      }]
    }]
  },
  plugins: [
    // Extract CSS
    new ExtractTextPlugin('css/app.css', {
      allChunks: true
    }),

    // Copy images
    new CopyWebpackPlugin([
      { from: 'resources/img', to: 'images' }
    ])
  ]
};

module.exports = config;
