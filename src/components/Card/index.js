import "./card.css";
import Comments from '../Comments/index';

const filmes = [
  {
    "nome": "Velozes e Furiosos 9",
    "duracao": "2H23",
    "foto": "https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg",
    "ano": 2021,
    "assistido": true,
    "genero": "Ação",
    "descricao": "Nova aventura de Dominic Toretto e sua equipe",
    "nota": 4.5
  },
  {
    "nome": "Viúva Negra",
    "duracao": "2H14",
    "foto": "https://br.web.img2.acsta.net/pictures/20/03/09/15/51/4538015.jpg",
    "ano": 2021,
    "assistido": true,
    "genero": "Ação",
    "descricao": "Filme solo da Viúva Negra da Marvel",
    "nota": 4.7
  },
  {
    "nome": "Shang-Chi e a Lenda dos Dez Anéis",
    "duracao": "2H12",
    "foto": "https://upload.wikimedia.org/wikipedia/pt/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    "ano": 2021,
    "assistido": true,
    "genero": "Ação",
    "descricao": "Filme da Marvel sobre o herói asiático Shang-Chi",
    "nota": 4.9
  },
  {
    "nome": "007: Sem Tempo Para Morrer",
    "duracao": "2H43",
    "foto": "https://m.media-amazon.com/images/I/51i8Qgwf13L.jpg",
    "ano": 2021,
    "assistido": true,
    "genero": "Ação/Thriller",
    "descricao": "Último filme de Daniel Craig como James Bond",
    "nota": 4.8
  },
  {
    "nome": "O Esquadrão Suicida",
    "duracao": "2H12",
    "foto": "https://cinepop.com.br/wp-content/uploads/2016/07/esquadraosuicida_29.jpg",
    "ano": 2021,
    "assistido": true,
    "genero": "Ação/Comédia",
    "descricao": "Reinvenção da equipe de vilões da DC Comics",
    "nota": 4.4
  },
  {
    "nome": "Mundo em Caos",
    "duracao": "1H49",
    "foto": "https://m.media-amazon.com/images/I/81FiBk5NzwL.jpg",
    "ano": 2021,
    "assistido": true,
    "genero": "Ação/Ficção Científica",
    "descricao": "Adaptação do livro de Patrick Ness sobre um mundo sem mulheres",
    "nota": 4.2
  }
];


function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}
export default function Card() {
  let rows = [];

  for (let i = 0; i < filmes.length; i += 3) {
    let row = (
      <div className="row" key={i}>
        {filmes.slice(i, i + 3).map((filme, j) => (
          <div className="col" key={j}>
            <div className="card">
              <img src={filme.foto} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <Assitido javisto={filme.assistido} />
                <a href={`/detalhes/${filme.nome}`}>
                  <div className="btn btn-primary">Detalhes</div>
                </a>
              </div>
            </div>
            <Comments filme={filme.nome} />
          </div>
        ))}
      </div>
    );
    rows.push(row);
  }

  return (
    <div className="container text-center">{rows}</div>
  );
}
