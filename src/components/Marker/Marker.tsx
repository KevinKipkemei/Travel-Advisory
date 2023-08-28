import './Marker.css';

const Marker = ({ text }) => {
  return (
    <div className = 'location'>
      <div className="marker">{text}</div>
      <div className="arrow-down"></div>
    </div>
  );
};

export default Marker;
