import Swal from 'sweetalert2';
import "./plano.css";

const planos = [
    {
        "name": "Plano Básico",
        "price": "R$ 9,99",
        "details": "Assista a filmes selecionados em qualidade padrão.",
    },
    {
        "name": "Plano Padrão",
        "price": "R$ 19,99",
        "details": "Assista a filmes selecionados em qualidade HD e em até 2 telas simultâneas.",
    },
    {
        "name": "Plano Premium",
        "price": "R$ 29,99",
        "details": "Assista a filmes selecionados em qualidade Ultra HD 4K e em até 4 telas simultâneas.",
    },
]
function planoIndisponivel(event) {
    event.preventDefault();
    Swal.fire({
        icon: 'warning',
        title: 'Plano indisponível',
        text: 'Desculpe, este plano não está disponível no momento.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
    })
}

export default function Card() {
    return (
        <div className="container text-center">
            <div className="row">
                {planos.map((plano, i) => (
                    <div className="col" key={i}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{plano.name} </h5>
                                <p className="card-text">{plano.details}</p>
                                <p className="card-text">{plano.price}</p>
                                <a href={`/planos/comprar/${plano.name}`} onClick={(event) => planoIndisponivel(event)}>
                                    <div className="btn btn-primary">
                                        Comprar
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
