import './Card.css';

const Card = ({ element }) => {
  return (
    <div className="card">
      <div className="cardimage">
        {
          element.photo?
          <div>
            <img className = 'image' src= {element.photo.images.large.url}/>
          </div> : <div>
            <img className = 'image' src= 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'/>
          </div>
        }
      </div>
      <div className="cardtitle">
        <p className="name">{element.name}</p>
      </div>
      <div className="rankingdetails">
        <p className="ranking">Ranking :</p>
        <p className="ranking">{element.ranking}</p>
      </div>
      <div className="pricedetails">
        <p className="ranking">Price :</p>
        <p className="ranking">{element.price_level}</p>
      </div>
      <div className="cuisinedetails">
        <p className="cuisine">Cuisines</p>
        <div className = 'cuisineslist'>
        {element?.cuisine?.map((cuisine) => (
          <p className="ranking">{cuisine.name}</p>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
