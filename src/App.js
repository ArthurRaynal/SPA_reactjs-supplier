import './App.css';
import  SuppliersList from './Pages/SuppliersList.js';
import  SuppliersMap from './Pages/SuppliersMap.js';
import Supplier from "./Components/Supplier";
import Home from './Pages/Home.js'
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suppliersList" element={<SuppliersList />} />
          <Route path="/suppliersMap" element={<SuppliersMap />} />
          <Route path="/supplier" element={<Supplier />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}



export default App;