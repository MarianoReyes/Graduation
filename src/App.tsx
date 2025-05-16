import React from 'react';
import Header from './components/Header';
import Invitation from './components/Invitation';
import Countdown from './components/Countdown';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Invitation />
      <Countdown />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;