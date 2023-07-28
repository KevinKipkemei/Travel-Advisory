import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map/Map';
import List from './components/List/List';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [coords, setCoords] = useState({});
  const [error, setError] = useState('');

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

  return (
    <div>
      <Navbar />
      <div className="landing-page">
        <div className="filters-section">
          <List />
        </div>
        <div className="map-section">
          {Object.keys(coords).length > 0 ? (
            <Map coords={coords} />
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
