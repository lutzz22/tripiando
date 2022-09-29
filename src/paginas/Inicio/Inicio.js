import {React, useContext}  from 'react'
import AdsSection from '../../componentes/Anuncios/AdsSection'
import Navbar from '../../componentes/Navbar/Navbar'
import Posteo from '../../componentes/Posteo'
import { Context } from '../../store/AppContext'
import '../Inicio/style.css'



const Inicio = () => {

  const {posts} = useContext(Context)


  return (
    <>
     <div className='d-flex inicio justify-content-between'>
      <Navbar/>
      <div className='d-flex flex-column posteos'>
          {
            posts.map(posteo => (
              <Posteo key={posteo.id} {...posteo} posteo={posteo}/>
            ))
          }
      </div>  
      <AdsSection/>
    </div>
    </>
  )
}

export default Inicio