const Livro = require('./livro-schema'); 


const obterLivros = async () => {
  try {
    const livros = await Livro.find({});
    return livros;
  } catch (error) {
    throw new Error(`Erro ao obter os livros: ${error.message}`);
  }
};


const incluir = async (livro) => {
  try {
    const novoLivro = await Livro.create(livro);
    return novoLivro;
  } catch (error) {
    throw new Error(`Erro ao incluir o livro: ${error.message}`);
  }
};


const excluir = async (codigo) => {
  try {
    const resultado = await Livro.deleteOne({ _id: codigo });
    return resultado;
  } catch (error) {
    throw new Error(`Erro ao excluir o livro: ${error.message}`);
  }
};

module.exports = {
  obterLivros,
  incluir,
  excluir,
};