import React from 'react';
import './style.scss';

const CharacterCard = (props) => {
  return (
    <div className="card__section">
      <div className="card__container">
        <div className="card__image" style={{backgroundImage: `url(${props.character.image})`}}></div>
        <div className="card__text">
          <h3 className="card__title">{props.character.name}</h3>
          <ul className="card__data">
            <li className="card__data--item">House: {props.character.house}</li>
            <li className="card__data--item">Year of Birth: {props.character.yearOfBirth}</li>
            <li className="card__data--item">Patronus: <span className="card__text--patronus">{props.character.patronus}</span></li>
            <li className="card__data--item">State: {props.character.alive ? "ALIVE" : "DEAD"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default CharacterCard;