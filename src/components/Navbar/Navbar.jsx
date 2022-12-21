
import React from "react";
import Cart from "../Cart/Cart";
const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="">Home</a>
                        <a className="nav-link" href="">Tienda</a>
                        <a className="nav-link" href=""><Cart /></a>
                    </div>

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button class="dropdown-item" type="button">Hombre</button></li>
                            <li><button class="dropdown-item" type="button">Mujer</button></li>
                            <li><button class="dropdown-item" type="button">Unisex</button></li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;