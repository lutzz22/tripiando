import {React, useContext}  from 'react'
import '../Favoritos/style.css'
import Navbar from '../../componentes/Navbar/Navbar'
import { Context } from '../../store/AppContext'
import PosteoFav from '../../componentes/PosteoFav'

const Fav = () => {
  const {postFavs} = useContext(Context)
  console.log(postFavs)
  return (
    <>
      <div className='d-flex fav'>
      <Navbar/>
      <div className='d-flex flex-column posteoos'>
          {
            postFavs.map(posteo => (
              <PosteoFav key={posteo.id} {...posteo}/>
            ))
          }
      </div>  

      </div>

    </>
  )
}

export default Fav