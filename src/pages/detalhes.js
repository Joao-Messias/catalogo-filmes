import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title/index';

function Assistido({ javisto }) {
    if (javisto) {
        return "✔";
    }

    return "Não assistido";
}

function Detalhes() {
    const { filme } = useParams();
    const [info, setInfo] = useState();
    const [hasError, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${filme}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            })
            .then((data) => {
                setInfo(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />

            {/* waits till loading is false */}
            {loading ? (
                // wait till loading is true
                <div className='container'>
                    <p className='display-6 text-center'>Carregando...</p>
                </div>
            ) : (
                <div>
                    {hasError ? (
                        // handle if error happened while fetching
                        <div className='container'>
                            <p className='display-6 text-center'>Erro ao encontrar detalhe do filme :/</p>
                        </div>
                    ) : (
                        // deal with filme info
                        <div className='container my-5'>
                            {info ? (
                                <div className='row justify-content-center'>
                                    <div className='col-md-8'>
                                        <div className='card border-0 shadow'>
                                            <div className='card-body p-5'>
                                                <div className='row'>
                                                    <div className='col-md-4'>
                                                        <img src={info.poster} alt={info.titulo} className='img-fluid img-thumbnail border-0 rounded-5' />
                                                    </div>
                                                    <div className='col-md-8'>
                                                        <h1 className='mb-4'>{info.titulo}</h1>
                                                        <p className='lead mb-2'>
                                                            <span className='fw-semibold'>Ano:</span> {info.ano}
                                                        </p>
                                                        <p className='lead mb-4'>
                                                            <span className='fw-semibold'>Sinopse:</span> {info.sinopse}
                                                        </p>
                                                        <p className='lead mb-4'>
                                                            <span className='fw-semibold'>Assistido:</span> <Assistido javisto={info.assistido} />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <br></br>
                            )}
                        </div>
                    )}

                </div>
            )}
        </div>
    )
}

export default Detalhes;