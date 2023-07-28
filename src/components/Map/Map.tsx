import { useState } from 'react';
import './Map.css'
import GoogleMapReact from 'google-map-react'

const Map = ({coords}) => {
    return(
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{key: import.meta.env.VITE_G_MAPS_API_KEY }}
                defaultCenter = {coords}
                center = {coords}
                defaultZoom = {15}
                margin = {[50,50,50,50]}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map;
