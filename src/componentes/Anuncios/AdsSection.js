import React, { useContext } from 'react'
import { Context } from '../../store/AppContext'
import Anuncios from './Anuncios'
import './adsSection.css'

const AdsSection = () => {
    const {news} = useContext(Context)

    return (
        <div className='d-flex flex-column ads'>
        <h3>Noticias de ultimo momento</h3>
        <div >
            {
              news.map(noticia => (
                <Anuncios key={noticia.id} {...noticia}/>
              ))
            }
        </div>  
        </div>
     
    )
}


export default AdsSection