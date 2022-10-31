import React from "react";
import './App.css';
import ItemView from './ItemView/ItemView';
import { Route, Link, Routes } from "react-router-dom";
import Navigation from './navigation/navigation.js';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
     <Route path= "/item/" element={<ItemView/>}/>
     </Routes>
    </div>
  );
}

export default App;
