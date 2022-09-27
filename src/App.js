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
<<<<<<< HEAD
          <Route path='/posteo' element={<Posteo/>}/>
          <Route path='/' element={<Home/>} />
=======
          <Route path='/' element={<Home></Home>} />
>>>>>>> adbdfce3047a8ebc43d97dc21c27266e40c3026c
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
