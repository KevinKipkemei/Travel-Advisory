import './List.css';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';

const List = ({ places, type, setType, loading, setLoading }) => {
  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
    setLoading(true)
  };
  return (
    <div>
      <h4>Restaurants, Hotels and Attractions Around You</h4>
      <div className="page">
        <div className="container">
          <label className="restaurant-label">Select an option</label>
          <select
            className="select-dropdown"
            value={type}
            onChange={handleClick}
          >
            <option value={'restaurants'}>Restaurants</option>
            <option value={'attractions'}>Attractions</option>
            <option value={'hotels'}>Hotels</option>
          </select>
        </div>
        <div className="container">
          <label className="restaurant-label">Select a rating</label>
          <select className="select-dropdown">
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>All</option>
          </select>
        </div>
      </div>
      {!loading ? (
        <div className="resultscards">
          {places?.map((element, index) => (
            <div key={index}>
              <Card element={element} />
            </div>
          ))}
        </div>
      ) : (
        <div className="loadingcontainer">
          <span className="spinner"></span>
          <p> Loading {type}</p>
        </div>
      )}
    </div>
  );
};

export default List;
