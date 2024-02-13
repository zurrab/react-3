import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const App = () => {
 
  const displayHello = (message) => {
    window.alert(message);
  }

  return (
    <div id="app">
     
      <Header />

      <Main displayHello={displayHello} />

    
      <Footer />
    </div>
  );
}

export default App;