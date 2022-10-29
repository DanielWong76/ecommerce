import React from "react";
import './App.css';
import ItemView from './ItemView';
import { Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
     <Route path= "/item/" element={<ItemView/>}/>
     </Routes>
    </div>
  );
}

export default App;
