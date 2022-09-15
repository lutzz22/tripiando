import {React, useContext}  from 'react'
import '../Error/style.css'
import error from "../../imagenes/error.jpg"

const Error = () => {
  return (
    <div className='error'>
      <div className='text-center'>
        <img src = {error} className='image' alt="..."/>
      </div>
      
      <div className='text-center'>
        <p className='texto1'> Error 404 </p>
        <p className='texto2'> página no encontrada </p>
      </div>
      
    </div>
  )
}

export default Error