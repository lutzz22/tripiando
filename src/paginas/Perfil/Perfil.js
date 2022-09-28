import {React, useContext} from 'react'
import '../Perfil/style.css'
import Navbar from '../../componentes/Navbar/Navbar'
import { Context } from '../../store/AppContext'

const Perfil = () => {
const {user} = useContext(Context)

  return (
    <>
      <div className='d-flex'>
      <Navbar/>
      <div className='d-flex flex-column miperfil'>
         <h5>{user.nombre}</h5>
         <p id='parrafo'>@{user.username}</p>
         <div className='d- flex'>
          <button id='nombre'>cambiar nombre</button>
          <button id='cerrar'>cerrar sesion</button>
         </div>
      </div>  

    </div>
    </>
  )
}

export default Perfil