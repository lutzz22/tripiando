import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './paginas/Home';
import Landing from './paginas/Landing';
import Inicio from './paginas/Inicio';
import Explorar from './paginas/Explorar';
import Fav from './paginas/Favoritos/Fav';
import Perfil from './paginas/Perfil';
import Error from './paginas/Error';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='/inicio' element={<Inicio />}></Route>
          <Route path='/explorar' element={<Explorar />}></Route>
          <Route path='/favoritos' element={<Fav />}></Route>
          <Route path='/perfil' element={<Perfil />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
