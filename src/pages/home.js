import React, {useState, useEffect, useMemo} from 'react';
import Title from '../components/Title/index';
import Card from '../components/Card/index';
import SearchBar from '../components/SearchBar/index';

function Assistido({javisto}) {
    if (javisto) {
        return '✔';
    }
    return 'Não assistido';
}

function Home(props) {
    const {filmes} = props;
    const [pesquisa, setPesquisa] = useState('');
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [filtro, setFiltro] = useState('titulo');
    const [filmesFiltrados, setFilmesFiltrados] = useState([]);
    const filmesPorPagina = 3;

    const handlePesquisa = (valor) => {
        setPesquisa(valor);
        setPaginaAtual(1);
    };

    const indexUltimoFilme = paginaAtual * filmesPorPagina;
    const indexPrimeiroFilme = (paginaAtual - 1) * filmesPorPagina;
    const filmesPaginados = filmesFiltrados.slice(indexPrimeiroFilme, indexUltimoFilme);

    const paginate = (pageNumber) => setPaginaAtual(pageNumber);

    useEffect(() => {
        const filmesFiltrados = filmes.filter((filme) =>
            filme.titulo.toLowerCase().includes(pesquisa.toLowerCase())
        );
        setFilmesFiltrados(filmesFiltrados);
    }, [filmes, pesquisa, filtro]);


    return (
        <div>
            <Title title={'Catálogo de Filmes'} text={'Descubra seus filmes favoritos!'}/>
            <SearchBar onSearch={handlePesquisa}/>
            <br/>
            <Card filmes={filmesPaginados} assistidoComponent={Assistido}/>
            <br/>
            <div className="pagination justify-content-center">
                {filmesFiltrados.length > filmesPorPagina &&
                    [...Array(Math.ceil(filmesFiltrados.length / filmesPorPagina))].map((_, index) => (
                        <button key={index} className="btn btn-primary m-1" onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
            </div>
        </div>
    );
}

export default Home;
