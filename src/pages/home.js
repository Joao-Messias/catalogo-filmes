import React from 'react';
import Title from '../components/Title/index';
import Card from '../components/Card/index';

const filmes = [{
    "nome": "Vingadores",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2010,
    "assistido": true,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 2",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2014,
    "assistido": true,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 3",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2015,
    "assistido": false,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
}
]


function Assistido({ javisto }) {
    if (javisto) {
        return "✔";
    }

    return "Não assistido";
}


function Home() {
    return (
        <div>
            <Title
                title={"Catálogo de Filmes"}
                text={"Descubra seus filmes favoritos!"} />
            <Card />
        </div>
    )
}
export default Home;