// import { React } from 'react'
// import { Link } from 'react-router-dom';
import React from 'react'
import mendoza from "../../Imagenes/mendoza.jpg"
import './style.css'

const Cards = () => {
    return (
    <div className='container'>
        <div className='rows d-flex justify-content-around'>

            <div className="card style=width: 18rem col-3">
                <img src = {mendoza} className= " card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">5 cosas que no te podes perder en el Calafate</p>
                </div>
            </div>

            <div className="card style=width: 18rem col-3">
                <img src={mendoza} className= " card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Las mejores bodegas de Mendoza</p>
                </div>
            </div>

            <div className="card style=width: 18rem col-3">
                <img src={mendoza} className=" card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Lugares, buenos, bonitos y baratos para comer en Pinamar</p>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default Cards