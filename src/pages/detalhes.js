import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title/index';

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

function FilmeExist(nomeFilme) {

    for (const key in filmes) {

        if (filmes[key].nome != nomeFilme) {
            continue;
        };

        return filmes[key];
    }

    return 0
};

function Assistido({ javisto }) {
    if (javisto) {
        return "✔";
    }

    return "Não assistido";
}

function Detalhes() {
    const { filme } = useParams();

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />

            {(() => {
                let desc = FilmeExist(filme)

                if (desc == 0) {
                    return (
                        <div className='container'>
                            <p className='display-6 text-center'> Detalhes do filme não encontrados :'(</p>
                        </div>
                    )
                }
                return (
                    <div className='container my-5'>
                        <div className='row justify-content-center'>
                            <div className='col-md-8'>
                                <div className='card border-0 shadow'>
                                    <div className='card-body p-5'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <img src={desc.foto} alt={desc.nome} className='img-fluid img-thumbnail border-0 rounded-5' />
                                            </div>
                                            <div className='col-md-8'>
                                                <h1 className='mb-4'>{desc.nome}</h1>
                                                <p className='lead mb-2'>
                                                    <span className='fw-semibold'>Duração:</span> {desc.duracao}
                                                </p>
                                                <p className='lead mb-2'>
                                                    <span className='fw-semibold'>Gênero:</span> {desc.genero}
                                                </p>
                                                <p className='lead mb-4'>
                                                    <span className='fw-semibold'>Pontuação:</span> {desc.nota}
                                                </p>
                                                <p className='lead mb-4'>
                                                    <span className='fw-semibold'>Sinopse:</span> {desc.descricao}
                                                </p>
                                                <p className='lead mb-4'>
                                                    <span className='fw-semibold'>Assistido:</span> <Assistido javisto={desc.assistido} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })()}

        </div>
    )
}

export default Detalhes;