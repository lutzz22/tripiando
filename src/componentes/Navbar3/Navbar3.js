import { React } from 'react'
import { Link } from 'react-router-dom'
import '../../componentes/Navbar3/Navbar3'
import '../Navbar3/style.css'

const Navbar = () => {
    return (
    <div className='container-fluid pt-3 pb-5'>
        <nav className="navbar text-decoration-none styleNavbar ">
            <div className='w-100 d-flex justify-content-around align-items-center'>

                <Link to="#" className='titulos'>Inicio</Link>

                <h1><Link to='/home' className='titulo'>Tripiando</Link></h1>

                <nav className='d-flex list-unstyled titulos'>
                    <li className="breadcrumb-item"><Link to="/login" className='titulos'>Iniciar sesión</Link></li>
                    <li className=""><Link to="/login" className='titulos'>Registrarse</Link></li>
                </nav>

            </div>
        </nav>
    </div>
    
    )
}

export default Navbar