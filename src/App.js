import React from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Total'
import {products} from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <Home products={products} />
      

    </div>
    
  );
}

export default App;
