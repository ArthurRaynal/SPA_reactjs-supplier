import React from 'react';
import Header from "../Components/Header"
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

function suppliersMap() {
    const position = [51.505, -0.09]
    return (
        <div className="supplierMap">

            <Header />
            <h1>Carte des fournisseurs</h1>
            <div className="mapDiv">
                <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default suppliersMap;