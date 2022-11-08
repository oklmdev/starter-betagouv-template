const glob = require('glob');
const path = require('node:path');
const fs = require('node:fs');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' ? 'production' : 'development',
  entry: './src/assets/cms-admin/index.ts',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version)
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        exclude: '/node_modules/',
        options: {
          loader: 'tsx',
          target: 'es2015'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'assets', 'cms-admin')
  }
};
