import { React, useContext } from 'react'
import '../../componentes/LandingCards/LandingCards'
import mendoza from "../../imagenes/mendoza.jpg"
import { Context } from '../../store/AppContext'
import '../LandingCards/style.css'

const Cards = (props) => {

    const {tittle, post} = props;
    const {alert} = useContext(Context)

    return (
    
    <div className='container'>
        <div className='color'>
        <div className='d-flex flex-wrap justify-content-around' >

            <div className="card mb-3" style={{width: "14rem"}} onClick={alert}>
                <img src = {mendoza} className= " card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>{tittle}</h6>
                    <p className="card-text">{post}</p>
                </div>
            </div>

            {/* <div className="card mb-3" style={{width: "14rem"}}>
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
            </div>  */}
        </div>
    </div>
    </div>
    )
}

export default Cards