const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');
const path = require('path');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'packages'),
};

const commonConfig = merge([
  {
    entry: PATHS.app,
    output: {
      path: path.resolve(process.cwd(), 'dist'),
    },
    node: false,
    plugins: [
      new CaseSensitivePathsPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new GenerateSW(),
      new HtmlWebpackPlugin({
        template: './template/index.html',
        title: 'Web Component Project Starter',
      }),
    ],
    resolve: {
      mainFields: ['module', 'browser', 'main'],
    },
  },
  parts.loadJavaScript({
    include: PATHS.app,
  }),
  {
    optimization: {
      noEmitOnErrors: true,
    },
  },
]);

const productionConfig = merge([
  {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 250000,
      maxAssetSize: 450000,
    },
  },
  {
    recordsPath: path.join(__dirname, 'records.json'),
    output: {
      chunkFilename: '[name].[chunkhash:4].js',
      filename: '[name].[chunkhash:4].js',
    },
  },
  parts.clean(),
  parts.minifyJavaScript(),
  parts.generateSourceMaps({ type: 'source-map' }),
  {
    optimization: {
      splitChunks: {
        chunks: 'initial',
      },
      runtimeChunk: {
        name: 'manifest',
      },
    },
  },
  parts.attachRevision(),
]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = mode => {
  const config = mode === 'production' ? productionConfig : developmentConfig;

  return merge([commonConfig, config, { mode }]);
};
