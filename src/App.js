import './App.css';

import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/info.js';
import NotFound from './pages/NotFound.js';

import Search from './pages/Search.js';
import Cadastro from './pages/Cadastro.js';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products/:id/info' element={<Info/>} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<NotFound/>} />
          <Route path='/cadastro' element={<Cadastro/>}/>
          {/* Redirect */}
          <Route path='/company' element={<Navigate to="/about"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
