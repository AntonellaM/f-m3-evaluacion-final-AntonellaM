import React from 'react';
import CharacterList from '../CharacterList';
import Filters from '../Filters';
import './style.scss';

const Homepage = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1 className="header__title">Harry Potter Characters</h1>
        <Filters f
          ilters={props.filters}
          handleInputContent={props.handleInputContent}
        />  
      </header>
      <main>
        
        <CharacterList
          characters={props.characters}
        />
      </main>
    </React.Fragment>
  );
}
 
export default Homepage;