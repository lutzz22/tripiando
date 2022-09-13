import React from 'react'
import Navbar2 from '../../componentes/Navbar2/Navbar2'
import './style.css'

const Login = () => {
  return (
    <>
    <Navbar2/>
      <div id='formularios' className='row'>
        <h2>Inicia Sesion o Registrate</h2>
        <div id='inicioSesion' className='col-3'>
          <div className="mb-3">
            <label htmlFor="emailInicio" className="form-label">Correo Electronico</label>
            <input type="email" className="form-control" id="emailInicio" aria-describedby="emailHelp"  placeholder=' escriba su correo electronico'/>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInicio" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="passwordInicio" placeholder='escriba una contraseña'/>
          </div>
          <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
        </div>
        <div className='col-1 d-flex justify-content-center'>
          <h6>|</h6>
        </div>
        <div id='registro' className=' col-3'>
          <div className='mb=3'>
            <label htmlFor='usuario' className='form-label'>Nombre de Usuario</label>
            <input type='text' className='form-control' id='usuario' placeholder='escriba un nombre de usuario'></input>
          </div>
          <div className='mb-1'>
            <label htmlFor="emailRegistro" className="form-label">Correo Electronico</label>
            <input type="email" className="form-control" id="emailRegistro" aria-describedby="emailHelp" placeholder=' escriba su correo electronico' />
            <div id="emailHelp" className="form-text">nunca compartiremos este dato con nadie.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordRegistro" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="passwordRegistro"  placeholder='escriba una contraseña'/>
          </div>
          <button type="submit" className="btn btn-primary">Registrarme</button>
        </div>
      </div>
    </>
  )
}

export default Login