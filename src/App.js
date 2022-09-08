import React from 'react';
import './style/App.css';
import Books from './components/Books'
import Movies from './components/Movies'
import Tv from './components/Tv'
import Footer from './components/Footer'
import Header from './components/Header'
import IconNav from './components/IconNav'
import Music from './components/Music';
import Games from './components/Games'
import Comics from './components/Comics';


function App() {

  return (
    <div className="App">
    <IconNav />
     <Header />
     <Movies />
     <Tv />
     <Books />
     <Games />
     <Music />
     <Comics />
     <Footer />
    </div>
  );
}

export default App;
