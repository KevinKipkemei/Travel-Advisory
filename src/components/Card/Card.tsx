import './Card.css';

const Card = ({ element }) => {
  return (
    <div className="card">
      <div className="cardimage"></div>
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
