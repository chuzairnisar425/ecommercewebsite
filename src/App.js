import React from 'react';
import MembershipForm from './components/MembershipForm';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import Header from './components/Header';
import Topheader from './components/Topheader';


const App = () => {
  return (
    <div>
      <Topheader/>
      <Header/>
      <MembershipForm />
      <Footer />
    </div>
  );
};

export default App;
