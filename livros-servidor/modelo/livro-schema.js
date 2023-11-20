const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  anoPublicacao: Number,
  genero: String,
});

const Livro = mongoose.model('livros', LivroSchema);

module.exports = Livro;