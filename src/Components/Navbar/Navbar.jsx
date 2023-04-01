import { CartWidget } from "../CartWidget/CartWidget";
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.google.com">Compushop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="https://www.google.com">Inicio<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="https://www.google.com">Contacto</a>
                    </li>
                </ul>
                <CartWidget cantCarrito={2} />
            </div>
        </nav>

    );
}