const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const loadLocalEnv = () => {
  const envPath = path.resolve(__dirname, ".env");
  if (!fs.existsSync(envPath)) return {};

  return fs
    .readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .reduce((env, line) => {
      const normalized = line.trim();
      if (!normalized || normalized.startsWith("#")) return env;
      const separator = normalized.indexOf("=");
      if (separator < 1) return env;
      const key = normalized.slice(0, separator).trim();
      const value = normalized
        .slice(separator + 1)
        .trim()
        .replace(/^(['"])(.*)\1$/, "$2");
      env[key] = value;
      return env;
    }, {});
};

const localEnv = loadLocalEnv();

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Точка входа
  output: {
    path: path.resolve(__dirname, "build"), // Измените "dist" на "build"
    filename: "assets/[name].[contenthash:8].js",
    chunkFilename: "assets/[name].[contenthash:8].js",
    clean: true,
    publicPath: '/',
  },
  performance: {
    hints: false,
    maxAssetSize: 750000,
    maxEntrypointSize: 750000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Обработка CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Обработка изображений/SVG (встроено в Webpack 5+)
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Автоматическое разрешение этих расширений
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Использовать как базовый HTML
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      __YANDEX_MAPS_API_KEY__: JSON.stringify(
        process.env.WINDOM_YANDEX_MAPS_API_KEY ||
          localEnv.WINDOM_YANDEX_MAPS_API_KEY ||
          "",
      ),
    }),
  ],
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    port: 3000, // Порт сервера разработки
    hot: true,
    historyApiFallback: true,
  },
};
