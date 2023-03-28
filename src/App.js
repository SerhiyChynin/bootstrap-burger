import './App.css';
import React from 'react';
import NavBar from './Component/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route to="/" element={<Home/>}/>
          <Route to="/users" element={<Users/>}/>
          <Route to="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
