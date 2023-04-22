import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title/index';

const Sobre = () => {
    return (
        <div className="container">
            <Title title={"Sobre"} text={"Mais informações sobre a empresa"} />
            <div className="row">
                <div className="col-md-6">
                    <p className="lead">
                        A nossa empresa é uma plataforma online especializada em opiniões e sugestões de filmes. O nosso objetivo é fornecer um espaço para que os amantes de cinema possam compartilhar suas opiniões, descobrir novos filmes e discutir seus favoritos.
                    </p>
                    <p className="lead">
                        Nós acreditamos que o cinema é uma forma poderosa de arte e expressão, e queremos criar uma comunidade vibrante e engajada de amantes de cinema que possam se conectar e compartilhar suas paixões. Além disso, oferecemos aos nossos usuários a opção de assistir aos filmes diretamente em nossa plataforma.
                    </p>
                    <p className="lead">
                        Estamos trabalhando constantemente para expandir ainda mais nosso catálogo de filmes e oferecer aos nossos usuários uma experiência ainda mais completa. Se você é um fã de cinema em busca de um lugar para se conectar com outras pessoas que compartilham de sua paixão, nosso site é o lugar certo para você. Junte-se a nós hoje e comece a explorar o mundo do cinema de uma forma totalmente nova.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src="https://cdn.dribbble.com/users/9378043/screenshots/16832559/netflix__1__4x.png" alt="logo" className="img img-fluid rounded-circle" />
                </div>
            </div>
        </div>
    );
};

export default Sobre;