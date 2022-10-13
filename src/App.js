import logo from './logo.svg';
import './App.css';
import  SuppliersList from './Pages/SuppliersList.js';
import  SuppliersMap from './Pages/SuppliersMap.js';
import React from "react";

function App() {

  function onSuppliersListClick(){
    setToggleDisplay(true);
  }

  function onMapClick(){
    setToggleDisplay(false);
  }

  const [toggleDisplay,setToggleDisplay] = React.useState(false)

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className={toggleDisplay ? '' : 'color-red'} onClick={onMapClick}>Map</a>
          <a className={toggleDisplay ? 'color-red' : ''} onClick={onSuppliersListClick}>Supplier</a>
        </header>
        {toggleDisplay ? <SuppliersList /> : <SuppliersMap />}
      </div>
  );
}



export default App;