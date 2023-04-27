import "./watch.css";

export default function Watch(props) {

    const handleAssistir = (titulo) => {
        const pesquisa = titulo.replaceAll(" ", "+");
        const url = `https://www.youtube.com/results?search_query=${pesquisa}`;
        window.open(url, "_blank");
    };

    return (
        <button className="btn btn-primary"
                onClick={() => handleAssistir(props.titulo)}
        >
            {props.IsWatched ? (
                "Assistir Novamente"
            ) : (
                "Assistir"
            )}

        </button>
    );
}
