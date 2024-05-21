import React from 'react';
import MembershipForm from './components/MembershipForm';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import Topheader from './components/Topheader';


const App = () => {
  return (
    <div>
      <Topheader/>
      <MembershipForm />
      <Footer />
    </div>
  );
};

export default App;
