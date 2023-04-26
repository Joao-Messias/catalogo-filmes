import "./header.css";
import {Link} from 'react-router-dom';
import {useState, useEffect, useLayoutEffect} from 'react';

export default function Header() {
    const [showCadastroButton, setShowCadastroButton] = useState(true);

    useLayoutEffect(() => {
        setShowCadastroButton(window.location.pathname !== "/cadastro");
    }, [window.location.pathname]);

    return (
        <div className="container">
            <header
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link className="nav-link" to='/'>Home</Link></li>
                    <li><Link className="nav-link" to='/planos'>Planos</Link></li>
                    <li><Link className="nav-link" to='/sobre/'>Sobre</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    {showCadastroButton && <Link className="btn btn-primary" to='/cadastro'>Cadastrar </Link>}
                </div>

            </header>
        </div>
    )
}