const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  output: {
    filename: 'app.min.js',
    path: path.join(__dirname, 'dist') // variavel __dirname é do node é pega o caminho do seu diretório atual
  },
  resolve: {
    extensions: [ '.ts', '.js']  // Aqui que dizemos pro webpack buscar extensão ts
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: '/node_modules/' // Essa regra diz para nos arquivos TS usar a dependencia loader-ts (responsável por transformar ts em js e não considerar o node_modules
    }]
  }
}