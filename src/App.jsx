import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainBanner } from './components/MainBanner/MainBanner';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <MainBanner/>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
