import { React } from 'react'
import { Link } from 'react-router-dom'
import '../../componentes/Navbar3/Navbar3'
import '../Navbar3/style.css'

const Navbar = () => {
    return (
    <div>
        <nav className="navbar text-decoration-none styleNavbar ">
            <div className='w-100 d-flex justify-content-around align-items-center'>

                <Link to="/landing" className='titulos'>Inicio</Link>

                <h1><Link to='/' className='titulo'>Tripiando</Link></h1>

                <nav className='d-flex list-unstyled '>
                    <li className="breadcrumb-item"><Link to="/login" className='titulos'>Iniciar sesión / Registrate</Link></li>
                </nav>

            </div>
        </nav>
    </div>
    
    )
}

export default Navbar