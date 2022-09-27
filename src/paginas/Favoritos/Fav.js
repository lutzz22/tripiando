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
      <div className='d-flex'>
      <Navbar/>
      <div className='d-flex flex-column posteos'>
          {
            postFavs.map(posteo => (
              <PosteoFav key={posteo.id} {...posteo} posteo={posteo}/>
            ))
          }
      </div>  

      </div>

    </>
  )
}

export default Fav