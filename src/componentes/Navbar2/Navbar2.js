import React from 'react'
import {Link} from 'react-router-dom';
import '../Navbar2/style.css'

const Navbar2 = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg barra">
          <div className="container-fluid">
            <Link className="navbar-brand logo" to='/home'>TRIPIANDO.COM</Link>
            <ul className='opciones d-flex'>
              <li className="nav-item">
                <Link className="nav-link link-light" to='/landing'>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to='/login' >Iniciar Sesion</Link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar2