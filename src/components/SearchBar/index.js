import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({onSearch, onFiltroChange, filtro}) {
    const handleInputChange = (event) => {
        onSearch(event.target.value);
    };

    const handleFiltroChange = (event) => {
        onFiltroChange(event.target.value)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Pesquisar filme por título"
                        onChange={handleInputChange}
                    />
                </div>
                {/*TODO LOGICA DE FILTRAR POR SELECT*/}
                <div className="col-md-2">
                    <select className="form-control" value={filtro} onChange={handleFiltroChange}>
                        <option value="titulo">Título</option>
                        <option value="ano">Ano</option>
                        <option value="nota">Nota</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onFiltroChange: PropTypes.func.isRequired,
    filtro: PropTypes.string.isRequired,
};

export default SearchBar;
