const express = require('express');
const router = express.Router();
const livroDAO = require('../modelo/livro-dao');


router.get('/', async (req, res) => {
  try {
    const livros = await livroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const novoLivro = req.body;
    await livroDAO.incluir(novoLivro);
    res.json({ mensagem: 'Livro incluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

router.delete('/:codigo', async (req, res) => {
  try {
    const codigoLivro = req.params.codigo;
    await livroDAO.excluir(codigoLivro);
    res.json({ mensagem: 'Livro excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

module.exports = router;