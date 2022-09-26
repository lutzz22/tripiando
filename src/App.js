import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './paginas/Home/index';
import Landing from './paginas/Landing/Landing';
import Inicio from './paginas/Inicio/Inicio';
import Explorar from './paginas/Explorar/Explorar';
import Fav from './paginas/Favoritos/Fav';
import Perfil from './paginas/Perfil/Perfil';
import Error from './paginas/Error/Error';
import Login from './paginas/Login';
import Footer from './componentes/Footer/Footer';
import { useContext } from 'react';
import { Context } from './store/AppContext';
// import Cookies from 'js-cookie';




function App() {

  
  const usuario = localStorage.getItem('usuario')
  // console.log(usuario)
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/landing' element={<Landing />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/inicio' element={usuario === 'si' ? <Inicio /> :<Navigate to='/'/>}/>
          <Route path='/explorar' element={usuario !== null ? <Explorar /> :<Navigate to='/'/>}/>
          <Route path='/favoritos' element={usuario !== null ? <Fav /> :<Navigate to='/'/>}/>
          <Route path='/perfil' element={usuario !== null ? <Perfil /> :<Navigate to='/'/>}/>
          <Route path='/*' element={<Error />}/>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
