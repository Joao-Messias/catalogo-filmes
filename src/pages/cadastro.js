import React, {useState} from "react";
import Swal from 'sweetalert2';
import Title from "../components/Title";
const RegisterPage = () => {
    // Define the state variables for form inputs
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvc, setCvc] = useState("");
    const [isPlusActive, setIsPlusActive] = useState(false);
    const [isFreeActive, setIsFreeActive] = useState(false);

    const validateCvc = (cvc) => {
        const regex = /^[0-9]{3}$/;
        return regex.test(cvc);
    }

    const validateCardNumber = (cardNumber) => {
        const regex = /^[0-9]{20}$/;
        return regex.test(cardNumber);
    }
    const handlePlusClick = () => {
        setIsPlusActive(true);
        setIsFreeActive(false);
    };

    const handleFreeClick = () => {
        setIsFreeActive(true);
        setIsPlusActive(false);
    };

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        address: "",
        cardName: "",
        cardNumber: "",
        cvc: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        if (name.trim() === "" || phoneNumber.trim() === "" || address.trim() === "" || cardName.trim() === "" || cardNumber.trim() === "" || cvc.trim() === "") {
            Swal.fire({
                icon: 'warning',
                title: 'Por favor, preencha todos os campos.',
            });
            return;
        }

        // Verifica se o número do cartão é válido
        if (!validateCardNumber(cardNumber)) {
            Swal.fire({
                icon: 'warning',
                title: 'Por favor, insira um número de cartão válido com 20 dígitos numéricos.',
            });
            return;
        }

        // Verifica se o CVC é válido
        if (!validateCvc(cvc)) {
            Swal.fire({
                icon: 'warning',
                title: 'Por favor, insira um código CVC válido com 3 dígitos numéricos.',
            });
            return;
        }

        // Se todas as validações passarem, podemos preencher o objeto de dados e exibir um alerta
        setFormData({
            name,
            phoneNumber,
            address,
            cardName,
            cardNumber,
            cvc,
        });

        Swal.fire({
            icon: 'success',
            title: 'Assinado com sucesso!',
            text: `Os dados cadastrados são:\nNome: ${name}\nNúmero de telefone: ${phoneNumber}\nEndereço: ${address}\nNome no cartão: ${cardName}\nNúmero do cartão: ${cardNumber}\nCVC: ${cvc}\n`,
        });
    };

    return (
    
    <div className="container">
        <Title
                title={"Cadastro de Assinante"}
                text="" />

        <div className="row">
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <h2>Dados Pessoais</h2>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Número de telefone:</label>
                        <input
                            type="tel"
                            className="form-control"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Endereço:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <h2>Dados do Cartão de crédito</h2>
                    <div className="form-group">
                        <label>Nome no cartão:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Número do cartão:</label>
                        <input
                            type="number"
                            maxLength={20}
                            className="form-control"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>CVC:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                        />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">
                        Assinar
                    </button>
                </form>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <h2>Plano Escolhido</h2>
                    <button
                        className={`btn m-2 ${isFreeActive ? "btn-danger" : "btn-primary"}`}
                        onClick={handleFreeClick}
                        disabled={isFreeActive}
                    >
                        Free
                    </button>
                    <button
                        className={`btn ${isPlusActive ? "btn-danger" : "btn-primary"}`}
                        onClick={handlePlusClick}
                        disabled={isPlusActive}
                    >
                        Plus
                    </button>
                </form>
            </div>
        </div>
    </div>);
};

export default RegisterPage;
