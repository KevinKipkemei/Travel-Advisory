import { useState } from 'react';
import './Map.css'
import GoogleMapReact from 'google-map-react'

const Map = ({coords}) => {
    return(
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{key: ''}}
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
