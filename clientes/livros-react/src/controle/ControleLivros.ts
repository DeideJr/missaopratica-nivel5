const baseURL = 'http://localhost:3030/livros';
import { Livro } from "../modelo/Livro";
interface LivroMongo {
  _id: string;
  titulo: string;
  autor: string;
  anoPublicacao: number;
  genero: string;
}

class ControleLivros {
  
  async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(baseURL);
      const livrosMongo: LivroMongo[] = await response.json();
      return livrosMongo.map((livroMongo) => ({
        codigo: livroMongo._id,
        titulo: livroMongo.titulo,
        autor: livroMongo.autor,
        anoPublicacao: livroMongo.anoPublicacao,
        genero: livroMongo.genero,
      }));
    } catch (error) {
      console.error('Erro ao obter livros:', error);
      return [];
    }
  }

  
  async excluir(codigo: string): Promise<boolean> {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: 'DELETE',
      });
      return response.ok;
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      return false;
    }
  }

 
  async incluir(livro: Livro): Promise<boolean> {
    try {
      const livroMongo: LivroMongo = {
        _id: livro.codigo,
        titulo: livro.titulo,
        autor: livro.autor,
        anoPublicacao: livro.anoPublicacao,
        genero: livro.genero,
      };

      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livroMongo),
      });

      return response.ok;
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
      return false;
    }
  }
}