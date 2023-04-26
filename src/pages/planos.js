import React from 'react';
import Title from '../components/Title/index';
import Plano from '../components/Plano/index';

function Planos() {
    return (
        <div>
            <Title
                title={"Planos"}
                text={"Veja abaixo os planos disponíveis:"} />
            <Plano />
        </div>
    )
}

export default Planos;