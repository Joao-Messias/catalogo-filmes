const commentarios = [
    {
        "usuario": "Maria",
        "comentario": "Ótimo filme, nunca tinha assistido, adorei!",
        "id": 85,
    },
    {
        "usuario": "João",
        "comentario": "Os filmes dos Vingadores são emocionantes e repletos de ação.",
        "id": 14,
    },
    {
        "usuario": "Ana",
        "comentario": "Odeio o Thanos!!! Mas adorei o filme, sempre com muita emoção.",
        "id": 96,
    },
    {
        "usuario": "Pedro",
        "comentario": "Avengers: Endgame trouxe um desfecho épico para a saga!",
        "id": 78,
    },
    {
        "usuario": "Luiza",
        "comentario": "Foi uma surpresa agradável, com uma protagonista forte e inspiradora.",
        "id": 36,
    },
    {
        "usuario": "Matheus",
        "comentario": "Esse filme apresenta um universo mágico e fascinante.",
        "id": 39,
    }
];


export default function Comments({filmeId}) {
    // Filtrando comentários com o filme desejado
    const comentariosFilme = commentarios.filter(filmec =>
        filmec.id.toString() === filmeId
    );

    if (comentariosFilme.length == 0) {
        return (
            <div className='container'>
                <p className='display-6 text-center'>Nenhum comentário encontrado :/</p>
            </div>
        )
    }
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