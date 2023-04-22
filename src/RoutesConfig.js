import {Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';

export default function RoutesConfig(props) {
    return (
        <Routes>
            <Route path='/' element={<Home filmes={props.filmes}/>}/>
            <Route path='planos' element={<Planos filmes={props.filmes}/>}/>
            <Route path='planos/:name' element={<Planos filmes={props.filmes}/>}/>
            <Route path='planos/comprar/:name' element={<Planos filmes={props.filmes}/>}/>
            <Route path='sobre/:name' element={<Sobre filmes={props.filmes}/>}/>
            <Route path='sobre' element={<Sobre filmes={props.filmes}/>}/>
            <Route path='detalhes/:filme' element={<Detalhes filmes={props.filmes}/>}/>
            <Route path='*' element={<h1>Página Não Encontrada!</h1>}/>
        </Routes>
    );
}
