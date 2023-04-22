import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import RoutesConfig from './RoutesConfig';

function App() {
    const [filmes, setFilmes] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        async function fetchFilmes() {
            try {
                const response = await fetch('https://my-json-server.typicode.com/marycamila184/movies/movies');
                const filmes = await response.json();
                setFilmes(filmes);
            } catch (error) {
                console.log(error);
            }
        }
        fetchFilmes();
    }, []);

    const handleSearch = (text) => {
        setSearchText(text);
    };

    return (
        <Router>
            <Header onSearch={handleSearch} />
            <RoutesConfig filmes={filmes} searchText={searchText} />
            <Footer />
        </Router>
    );
}

export default App;
