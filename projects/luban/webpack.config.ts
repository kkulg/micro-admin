import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

import 'webpack-dev-server';

const vueLoaderPlugin: any = new VueLoaderPlugin();

const htmlWebpackPlugin: any = new HtmlWebpackPlugin({
  title: 'Luban',
  template: path.resolve(__dirname, 'public/index.html')
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.ts', '.vue', '.tsx', '.js'],
    alias: {
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/, 
        loader: 'vue-loader'
      },
      { 
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        options: { 
          appendTsSuffixTo: [/\.vue$/] 
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    vueLoaderPlugin,
    htmlWebpackPlugin
  ],
  devServer: {
    host: '127.0.0.1',
    port: 9000,
    hot: true,
    open: true,
  }
};

export default config;
