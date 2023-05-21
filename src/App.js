import React from 'react'
import './App.css';
import { Footer, Hero, Navbar, Section, Why, Sfoot} from './components';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Home from '../src/pages/Home';

const App = () => {
  return (

    <Router>

      <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/services' element={< Services />}></Route>
          </Routes>
   
    </Router>
    
  )
}

export default App