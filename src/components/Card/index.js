import "./card.css";
import Comments from "../Comments/index";
import Watch from "../Watch/index";

function Assistido({javisto}) {
    return <p>{javisto ? "Assistido ✔" : "Não assistido!"}</p>;
}

export default function Card({filmes}) {
    const handleAssistir = (titulo) => {
        const pesquisa = titulo.replaceAll(" ", "+");
        const url = `https://www.youtube.com/results?search_query=${pesquisa}`;
        window.open(url, "_blank");
    };

    const rows = [];

    for (let i = 0; i < filmes.length; i += 3) {
        let row = (
            <div className="row" key={i}>
                {filmes.slice(i, i + 3).map((filme) => (
                    <div
                        className={`col ${filmes.length === 1 ? "col-single" : filmes.length === 2 ? "col-double" : ""}`}
                        key={filme.id}>
                        <div className="card">
                            <img src={filme.poster} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {filme.titulo} ({filme.ano})
                                </h5>
                                <p className="card-text">{filme.descricao}</p>
                                <p className="card-text">Nota: {filme.nota}</p>
                                <Assistido javisto={filme.assistido}/>
                                <Watch IsWatched = {filme.assistido} titulo = {filme.titulo}/>

                                <a href={`/detalhes/${filme.id}`}>
                                    <div className="btn btn-primary mt-2">Detalhes</div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
        rows.push(row);
    }

    return (
        <div className="container text-center">
            {rows}
        </div>
    );
}
