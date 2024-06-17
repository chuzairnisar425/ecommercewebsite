import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Categories from './components/Categories';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/sale" element={<Sale />} /> */}
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
