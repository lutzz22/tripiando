import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/style.css'
import ModalPost from '../ModalPost/ModalPost'
import Modal from '../ModalPost/Modal'
import '../ModalPost/style.css'




const Navbar = () => {

  return (
    <>
      <div id='nav'>
        <h2>TRIPIANDO</h2>

        <ul className='lista'>
          <li>
          <i className="bi bi-house-fill"></i>
          <Link className='nav-link' to='/inicio'> INICIO</Link>
          </li>
          <li>
          <i className="bi bi-fire"></i>
          <Link className='nav-link' to='/explorar'> EXPLORAR</Link>
          </li>
          <li>
          <i className="bi bi-heart-fill"></i>
          <Link className='nav-link' to='/favoritos'> FAVORITOS</Link>
          </li>
          <li className=' perfil'>
          <i className="bi bi-person-circle"></i>
          <Link className='nav-link' to='/perfil'> MI PERFIL</Link>
          </li>
        </ul>

        <button id='post'className='btn btn-primary' > NUEVO POST </button>
      </div>

    </>
  )
}

export default Navbar