import React, { useState } from 'react';
import minus from '../img/minus.png';
import plus from '../img/plus.png';
import {format} from "timeago.js";

function Supplier({data}) {
    return (
        <div className="supplier">
            <p>Fournisseur : {data.name}</p>
            <div className="status">
                <p>Statut : </p>
                <img src={data.status ? plus : minus} />
            </div>
            <p>Date : {format(data.checkedAt)}</p>
        </div>
    );
}

export default Supplier;