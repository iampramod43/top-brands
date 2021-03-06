import React from 'react';
import './App.css';
import Header from './app/Header';
import ProductList from './app/ProductList';
import Sidebar from './app/Sidebar';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__body">
        <Sidebar></Sidebar>
        <ProductList></ProductList>
      </div>
    </div>
  );
}

export default App;
