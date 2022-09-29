import React, { useContext } from 'react'
import '../Anuncios/style.css'

const Anuncios = ({title, description, urlToImage, url}) => {

  return (
    <div>
        <div className="card anuncio">
          <div className="card-header tittulo">
            {title}
          </div>
          
          <div className="card-body noticia">
            <p>{description}</p>
            <div  className='imagen'>
            {/* <img src={urlToImage}></img> */}
            </div>
            
          </div>
          <a target='_blank' href={url}>leer mas...</a>
        </div>
    </div>
  )
}

export default Anuncios