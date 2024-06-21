import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import Categories from './components/Categories';
import ViewAllCategories from './components/ViewAllCategories';
import ItemSelect from './components/ItemSelect';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/ViewAllCategories" element={<ViewAllCategories />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/sale" element={<Sale />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ItemSelect" element={<ItemSelect />} />
      </Routes>
    </Router>
  );
}

export default App;
