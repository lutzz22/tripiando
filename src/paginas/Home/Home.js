import {React, useContext}  from 'react';
import Navbar2 from '../../componentes/Navbar2/Navbar2';
import '../Home/style.css'
import img1 from '../../imagenes/img1.jpg'
import img2 from '../../imagenes/img2.jpg'
import img3 from '../../imagenes/img3.jpg'

const Home = () => {
  return (
    <>
      <div className='pagina'>
        <Navbar2></Navbar2>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>"No dejes para mañana el viaje que podes hacer hoy"</h5>
              </div>
            </div>
            <div className="carousel-item active">
              <img src={img2} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>"Si no escalas la montaña, jamas podras disfrutar del paisaje"</h5>
              </div>
            </div>
            <div className="carousel-item active">
              <img src={img3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>"Viaja, no para escapar de la vida, sino para que la vida no se escape"</h5>
              </div>
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
        {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title" id="exampleModalLabel">Modal title</h6>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
    
    
  )
}

export default Home