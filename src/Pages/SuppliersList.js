import React, {useState} from 'react';
import Header from "../Components/Header"
import Supplier from "../Components/Supplier";

function SuppliersList() {

    const [suppliers] = React.useState({
        suppliers: [
            {
                id: 1,
                name: "Fournisseur 1",
                status: true,
                checkedAt: new Date(),
            },
            {
                id: 2,
                name: "Fournisseur 2",
                status: false,
                checkedAt: new Date(),
            },
        ]
    })

    return (
        <div className="supplierList">
            <Header/>
            <h1>Liste des fournisseurs</h1>
            {suppliers.suppliers.map(item => { return <Supplier key={item.id} data={item}/>})}
        </div>

    );
}

export default SuppliersList;