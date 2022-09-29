import React, { useContext } from 'react'
import Navbar3 from '../../componentes/Navbar3/Navbar3'
import { Context } from '../../store/AppContext'
import './style.css'

const Login = () => {

  const { userLogin, email, pasword, setEmail, setPasword, username, setUsername, createUser, email2, pasword2, setEmail2, setPasword2 } = useContext(Context)

  const onSubmit = (e) => {
    e.preventDefault()
    userLogin(email, pasword)
    // console.log(email, pasword)
  }

  const register = (e) => {
    e.preventDefault()
    createUser(username, email2, pasword2)
  }


  return (
    <>
    <Navbar3/>
      <div id='formularios' className='row'>
        <h2>Inicia Sesion o Registrate aca</h2>
        <div id='inicioSesion' className='col-3'>
          <div className="mb-3">
            <label htmlFor="emailInicio" className="form-label">Correo Electronico</label>
            <input type="email" className="form-control" id="emailInicio" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp"  placeholder=' escriba su correo electronico'/>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInicio" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="passwordInicio" value={pasword} onChange={(e) => setPasword(e.target.value)} placeholder='escriba una contraseña'/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>Iniciar Sesion</button>
        </div>
        <div className='col-1 d-flex justify-content-center'>
          <h6>|</h6>
        </div>
        <div id='registro' className=' col-3'>
          <div className='mb=3'>
            <label htmlFor='usuario' className='form-label'>Nombre de Usuario</label>
            <input type='text' className='form-control' id='usuario' value={username} onChange={(e) => setUsername(e.target.value)}placeholder='escriba un nombre de usuario'></input>
          </div>
          <div className='mb-1'>
            <label htmlFor="emailRegistro" className="form-label">Correo Electronico</label>
            <input type="email" className="form-control" id="emailRegistro" value={email2} onChange={(e) => setEmail2(e.target.value)}aria-describedby="emailHelp" placeholder=' escriba su correo electronico' />
            <div id="emailHelp" className="form-text">nunca compartiremos este dato con nadie.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordRegistro" className="form-label">Contraseña</label>
            <input type="password" className="form-control" value={pasword2} onChange={(e) => setPasword2(e.target.value)}id="passwordRegistro"  placeholder='escriba una contraseña'/>
          </div>
          <button type="submit" onClick={register} className="btn btn-primary">Registrarme</button>
        </div>
      </div>
    </>
  )
}

export default Login