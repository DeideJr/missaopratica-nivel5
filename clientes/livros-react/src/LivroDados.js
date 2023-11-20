import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ControleLivros from '../controle/ControleLivros';

const LivroDados = () => {
  const [livro, setLivro] = useState({
    codigo: '',
    titulo: '',
    autor: '',
    anoPublicacao: '',
    genero: '',
  });

  const history = useHistory();

  const incluir = () => {
    const controleLivros = new ControleLivros();
    controleLivros.incluir(livro).then(() => {
     
      history.push('/');
    });
  };

  return (
    <div>
      {/* Renderização do formulário e campos do livro */}
      <button onClick={incluir}>Incluir Livro</button>
    </div>
  );
};

export default LivroDados;