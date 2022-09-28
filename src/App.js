import {Routes, Route} from 'react-router-dom';
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

  
  const { isLoggedIn } = useContext(Context)
  // console.log(usuario)
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/landing' element={<Landing />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/inicio' element={isLoggedIn ? <Inicio /> : <Home />}/>
          <Route path='/explorar' element={isLoggedIn ? <Explorar /> : <Home />}/>
          <Route path='/favoritos' element={isLoggedIn ? <Fav /> : <Home />}/>
          <Route path='/perfil' element={isLoggedIn ? <Perfil /> : <Home />}/>
          <Route path='/*' element={<Error />}/>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
