import {React, useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/style.css'
import Modal from '../ModalPost/Modal'
import { Context } from '../../store/AppContext'




const Navbar = () => {

  const { useModal } = useContext(Context)
  const[isOpenModal, modalOpen, modalClose] = useModal(false);

  return (
    <>
        <input type="checkbox" id="check"></input>
        <label htmlFor="check" className="checkbtn">
<<<<<<< HEAD
          <a className='menu'><i className="bi bi-list"></i>Menu</a>
=======
          <a className='menu'><i className="bi bi-list"></i>TRIPIANDO</a>
>>>>>>> adbdfce3047a8ebc43d97dc21c27266e40c3026c
        </label>

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

        <button id='post'className='btn btn-primary' onClick={modalOpen} > NUEVO POST </button>
        <Modal isOpen={isOpenModal} isClose={modalClose}></Modal>
      </div>
    </>
  )
}

export default Navbar