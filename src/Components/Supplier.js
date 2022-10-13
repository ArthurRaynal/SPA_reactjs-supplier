import React, { useState } from 'react';
import minus from '../img/minus.png';
import plus from '../img/plus.png';

function Supplier({data}) {
    return (
        <div className="supplier">
            <p>Fournisseur : {data.name}</p>
            <div className="status">
                <p>Statut : </p>
                <img src={data.status ? plus : minus} />
            </div>
            <p>Date : {data.checkedAt.toLocaleString('fr')}</p>
        </div>
    );
}

export default Supplier;