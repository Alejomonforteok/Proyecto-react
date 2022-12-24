import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';

const NavBar = () => {
  const setLinkColor = ({ isActive }) => (isActive ? { color: 'black' } : { color: '#0000008c' });

  return (
    <nav className='navbar navbar-expand-lg bg-light p-3 mb-5'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <a className='navbar-brand' href='/'>
          Todo Hogar
        </a>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink style={setLinkColor} className='nav-link' aria-current='page' to={'/'}>
                Inicio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink style={setLinkColor} className='nav-link' to={"/category/men's clothing"}>
                Ropa para hombres
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink style={setLinkColor} className='nav-link' to={"/category/women's clothing"}>
                Ropa para mujeres
              </NavLink>
            </li>
          </ul>
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;



/*         <nav className="navbar navbar-expand-lg bg-light">
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

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button">Hombre</button></li>
                            <li><button className="dropdown-item" type="button">Mujer</button></li>
                            <li><button className="dropdown-item" type="button">Unisex</button></li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav> */


