import {React, useContext, useEffect}  from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import Posteo from '../../componentes/Posteo'
import { Context } from '../../store/AppContext'
import '../Inicio/style.css'

// no logro hacer que se mapen los posteos. aparecen en consola pero no puedo mostrarlos

const Inicio = () => {

  const {posts} = useContext(Context)
  console.log(posts)

  return (
    <>
      <Navbar/>
      <div className='d-flex flex-wrap justify-content-between'>
          {
            posts.map(posteo => (
              <Posteo key={posteo.id} {...posteo} />
            ))
          }
      </div>  

    </>
  )
}

export default Inicio