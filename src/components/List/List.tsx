import './List.css';

const List = () => {
  const places = [
    { name: 'Beef Stake House' },
    { name: 'Stake House' },
    { name: 'BeeStake House' },
    { name: 'Beef Stke House' },
    { name: 'Beef Stake House' },
    { name: 'Stake House' },
    { name: 'BeeStake House' },
    { name: 'Beef Stke House' },
  ];
  return (
    <div>
      <h4>Restaurants, Hotels and Attractions Around You</h4>
      <div className="page">
        <div className="container">
          <label className="restaurant-label">Select an option</label>
          <select className="select-dropdown">
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
    </div>
  );
};

export default List;
