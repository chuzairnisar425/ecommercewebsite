import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import Categories from './components/Categories';
import ViewAllCategories from './components/ViewAllCategories';
import ItemSelect from './components/ItemSelect';
import EmptyCard from './components/EmptyCard';
import AddItem from './components/AddItem';
import Shipping from './components/Shipping';
import ContactUs from './components/ContactUs';
import About from './components/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/ViewAllCategories" element={<ViewAllCategories />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ItemSelect" element={<ItemSelect />} />
        <Route path="/EmptyCard" element={<EmptyCard />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
