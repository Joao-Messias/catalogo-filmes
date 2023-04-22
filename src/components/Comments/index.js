const commentarios = [
    {
        "usuario": "Maria",
        "comentario": "Velozes e Furiosos 9 é um ótimo filme de ação, com muita adrenalina e cenas impressionantes!",
        "filme": "Velozes e Furiosos 9"
    },
    {
        "usuario": "João",
        "comentario": "Viúva Negra é um filme muito divertido, com muita ação e uma ótima história de origem!",
        "filme": "Viúva Negra"
    },
    {
        "usuario": "Ana",
        "comentario": "Shang-Chi e a Lenda dos Dez Anéis é um filme incrível, com muita ação, efeitos visuais incríveis e um herói cativante!",
        "filme": "Shang-Chi e a Lenda dos Dez Anéis"
    },
    {
        "usuario": "Pedro",
        "comentario": "007: Sem Tempo Para Morrer é um filme de ação emocionante, com uma trama intrigante e muita adrenalina!",
        "filme": "007: Sem Tempo Para Morrer"
    },
    {
        "usuario": "Luiza",
        "comentario": "O Esquadrão Suicida é um filme de ação bem-humorado e cheio de surpresas, vale a pena assistir!",
        "filme": "O Esquadrão Suicida"
    },
    {
        "usuario": "Matheus",
        "comentario": "Mundo em Caos é um filme de ficção científica interessante, com uma história diferente e boas atuações!",
        "filme": "Mundo em Caos"
    }
];


export default function Comments({filme}) {
    // Filtrando comentários com o filme desejado
    const comentariosFilme = commentarios.filter(filmec =>
        filmec.filme === filme
    );
    // Criando variável para armazenar a quantidade máxima de comentários por linha
    const maxComentariosLinha = 3;
    // Dividindo a quantidade total de comentários pelo máximo de comentários por linha para obter o número de linhas
    const numLinhas = Math.ceil(comentariosFilme.length / maxComentariosLinha);
    return (
        // Adicionando o Bootstrap Container para centralizar o conteúdo
        <div className="container text-center">
            {
                // Criando um loop para cada linha
                Array.from({length: numLinhas}, (_, i) => (
                    <div className="row mb-3" key={i}>
                        {
                            // Criando um loop para cada comentário na linha atual
                            comentariosFilme.slice(i * maxComentariosLinha, (i + 1) * maxComentariosLinha).map((comment, j) => (
                                <div className="col" key={j}>
                                    <div className="card">
                                        <div className="card-header">
                                            {comment.usuario} - {comment.comentario}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}