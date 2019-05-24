import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const CharacterList = (props) => {
  
  return ( 
    <ul className="character__list-container">
      {props.characters.map(character => 
        <li
          key={character.id}
          id={character.id}
          className="character__list-wrapper"
        >
          <Link to={`/character/${character.id}`} style={{ textDecoration: 'none' }} >
            <div 
              className="character__image"
              style={{
                backgroundImage: `url(${character.image})`
            }}>
            </div>
            <h3 className="character__name">{character.name}</h3>
            <p className="character__house">{character.house}</p>
            <p className="icon__house">{character.house ? character.house[0].toUpperCase() : ''}</p>
            <i className={character.alive ? '' : "fas fa-skull-crossbones icon__dead"}></i>
          </Link>
        </li>
      )}
    </ul>
  );
}
 
export default CharacterList;