import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map/Map';
import List from './components/List/List';
import Navbar from './components/Navbar/Navbar';
import {getPlaces} from './api/apiCalls'

function App() {
  const [coords, setCoords] = useState({});
  const [error, setError] = useState('');
  const [places, setPlaces] = useState([]);
  const [boundaries, setBoundaries] = useState({})
  const [type, setType] = useState('restaurants')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
    };
    // checks if the geolocation API is available in the browser + error handling if not
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        },
        options
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  
  useEffect(() => {
    console.log(coords, boundaries)
    getPlaces(type, boundaries.sw, boundaries.ne, setLoading)
    .then((data) => {setPlaces(data), setLoading(!loading)});
  }, [coords, boundaries, type]);

  return (
    <div>
      <Navbar />
      <div className="landing-page">
        <div className="filters-section">
          <List places = {places} type = {type} setType = {setType} loading = {loading} setLoading ={setLoading}/>
        </div>
        <div className="map-section">
          {Object.keys(coords).length > 0 ? (
            <Map coords={coords} setBoundaries = {setBoundaries} places = {places}/>
          ) : (
            <div>
              <span className="spinner"></span>
              <p>Loading location </p>
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
