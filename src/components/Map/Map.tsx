import { useState } from 'react';
import './Map.css';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';

const Map = ({ coords, setBoundaries, places }) => {
  console.log(places);
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_G_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        onChange={(e) =>
          setBoundaries({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }
      >
        {
                places?.map((place, index) => (
                    <Marker key = {index} lat = {Number(place.latitude)} lng = {Number(place.longitude)} text={place.name}/>
                ))
            }
        {/* <Marker lat={37.774929} lng={-122.419416} text={'place.name'} />
        <Marker lat={37.766663} lng={-122.433266} text={'place.name'} /> */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
