import React from "react";
import logo from "../img/logo.svg";

function Header() {

    return (
        <header className="App-header">
            <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
            <div className="d-flex">
                <a href="/suppliersMap">Map</a>
                <a href="/suppliersList">Supplier</a>
            </div>

        </header>
    );
}

export default Header;