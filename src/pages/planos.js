import React from 'react';
import Title from '../components/Title/index';
import Plano from '../components/Plano/index';

function Planos() {
    return (
        <div>
            <Title
                title={"Planos"}
                text={"Veja abaixo os planos disponíveis:"} />
            <h1 className='text-center'>Planos</h1>
            <Plano />
        </div>
    )
}

export default Planos;