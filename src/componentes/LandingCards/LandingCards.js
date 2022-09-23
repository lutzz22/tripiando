import { React } from 'react'
// import { Link } from 'react-router-dom';
import '../../componentes/LandingCards/LandingCards'
import mendoza from "../../imagenes/mendoza.jpg"
import '../LandingCards/style.css'

const Cards = () => {
    return (
        <body className='color'>
    <div className='container'>
        
        <div className='rows mt-5  d-flex justify-content-around'>

            <div className="card mb-3" style={{width: "14rem"}}>
                <img src = {mendoza} className= " card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">5 cosas que no te podes perder en el Calafate</p>
                </div>
            </div>

            <div className="card mb-3" style={{width: "14rem"}}>
                <img src={mendoza} className= " card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Las mejores bodegas de Mendoza</p>
                </div>
            </div>

            <div className="card mb-3" style={{width: "14rem"}}>
                <img src={mendoza} className= " card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Las mejores bodegas de Mendoza</p>
                </div>
            </div>

            <div className="card mb-3" style={{width: "14rem"}}>
                <img src={mendoza} className= " card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Las mejores bodegas de Mendoza</p>
                </div>
            </div>

            <div className="card mb-3" style={{width: "14rem"}}>
                <img src={mendoza} className=" card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Lugares, buenos, bonitos y baratos para comer en Pinamar</p>
                </div>
            </div> 
        </div>
    </div>
    </body>
    )
}

export default Cards