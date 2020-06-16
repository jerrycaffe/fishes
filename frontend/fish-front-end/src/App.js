import React, { Fragment } from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar';
import Showcase from './components/Showcase';
import Contents from './components/Contents';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <header>
        <TopNavBar />
        <Showcase />
      </header>
      <Contents />
      <Footer />
    </Fragment>
  );
}

export default App;
