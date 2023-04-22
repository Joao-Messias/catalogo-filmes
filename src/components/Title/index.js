import "./title.css";

export default function Title(props) {
    return (
        <div className="container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.text}</p>
            </div>
        </div>
    )
}