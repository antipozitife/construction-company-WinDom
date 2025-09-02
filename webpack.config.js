const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка вывода
    filename: 'bundle.js', // Собраный JS-файл
    clean: true, // Очистка папки dist при сборке
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Транспиляция JS/JSX
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Обработка CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Обработка изображений/SVG (встроено в Webpack 5+)
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Автоматическое разрешение этих расширений
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Использовать как базовый HTML
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000, // Порт сервера разработки
    hot: true,
  },
  mode: 'development', // Измените на 'production' для сборок
};