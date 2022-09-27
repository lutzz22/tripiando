import {React, useContext}  from 'react';
import Navbar3 from '../../componentes/Navbar3/Navbar3';
import '../Home/style.css'
import img1 from '../../imagenes/img1.jpg'
import img2 from '../../imagenes/img2.jpg'
import img3 from '../../imagenes/img3.jpg'

const Home = () => {
  return (
    <>
    <div>
    <Navbar3/>
      <div className='pagina'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100 h-100" alt="..."/>
            </div>
            <div className="carousel-item active">
              <img src={img2} className="d-block w-100 h-100" alt="..."/>
            </div>
            <div className="carousel-item active">
              <img src={img3} className="d-block w-100 h-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> 
    </div>
    </>
    
    
  )
}

export default Home