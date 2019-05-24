import React from 'react';
import CharacterList from '../CharacterList';
import Filters from '../Filters';
import './style.scss';

const Homepage = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1 className="header">Harry Potter Characters</h1>
      </header>
      <main>
        <Filters f
          ilters={props.filters}
          handleInputContent={props.handleInputContent}
        />
        <CharacterList
          characters={props.characters}
        />
      </main>
    </React.Fragment>
  );
}
 
export default Homepage;