import React, { useState, useEffect } from 'react';
import LinhaLivro from './LinhaLivro';
import ControleLivros from '../controle/ControleLivros';

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    // Implementação assíncrona usando o operador then
    const controleLivros = new ControleLivros();
    controleLivros.obterTodos().then((resultado) => {
      setLivros(resultado);
      setCarregado(true);
    });
  }, []);

  const excluir = (codigo) => {
    const controleLivros = new ControleLivros();
    controleLivros.excluir(codigo).then(() => {
      // Chame setCarregado apenas ao final da execução do método excluir
      setCarregado(true);
    });
  };

  return (
    <div>
      {livros.map((livro, index) => (
        // Adicione o index no atributo key
        <LinhaLivro key={index} livro={livro} excluir={() => excluir(livro.codigo)} />
      ))}
    </div>
  );
};

export default LivroLista;