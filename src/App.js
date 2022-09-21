import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='/inicio' element={<Inicio />}></Route>
          <Route path='/explorar' element={<Explorar />}></Route>
          <Route path='/favoritos' element={<Fav />}></Route>
          <Route path='/perfil' element={<Perfil />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
