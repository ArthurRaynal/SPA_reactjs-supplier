import React, {useState} from 'react';
import Header from "../Components/Header"
import Supplier from "../Components/Supplier";
import suppliers from "../datas/Suppliers";

function SuppliersList() {

    const [suppliersData] = React.useState({suppliers})

    return (
        <div className="supplierList">
            <Header/>
            <h1>Liste des fournisseurs</h1>
            {suppliersData.suppliers.map(item => { return <Supplier key={item.id} data={item}/>})}
        </div>

    );
}

export default SuppliersList;