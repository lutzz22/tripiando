import {React, useContext}  from 'react'
import '../Favoritos/style.css'
import Navbar from '../../componentes/Navbar/Navbar'
import { Context } from '../../store/AppContext'
import PosteoFav from '../../componentes/PosteoFav'
import AdsSection from '../../componentes/Anuncios/AdsSection'

const Fav = () => {
  const {postFavs} = useContext(Context)

  return (
    <>
      <div className='d-flex fav justify-content-between'>
      <Navbar/>
      <div className='d-flex flex-column posteoos'>
          {
            postFavs.map(posteo => (
              <PosteoFav key={posteo.id} {...posteo}/>
            ))
          }
      </div>  
      <AdsSection/>
      </div>

    </>
  )
}

export default Fav