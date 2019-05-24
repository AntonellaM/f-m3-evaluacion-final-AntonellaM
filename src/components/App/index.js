import React from 'react';
import { fetchCharacters } from '../../services/GetData';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import CharacterCard from '../CharacterCard';
import './style.scss';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      filters: '',
      selectedID: '',
    }
    this.handleInputContent = this.handleInputContent.bind(this);
    this.getCharactersFiltered =  this.getCharactersFiltered.bind(this)
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetchCharacters()
    .then(characters => {
      const charactersToState = characters.map((character, index )=> {return {...character, id: index + 1}});
      this.setState({ characters: charactersToState })
    });
  }

  getCharactersFiltered() {
    return (
      this.state.characters.filter(character => 
        character.name.toUpperCase().includes(this.state.filters.toUpperCase()) || character.house.toUpperCase().includes(this.state.filters.toUpperCase()))
    );
  }

  handleInputContent(event) {
    const filter = event.currentTarget.value;
    this.setState({ filters: filter });
  }

  render() {
    return (
      <Switch>
        <Route 
          exact path='/'
          render = {routerProps => (
            <HomePage
              characters={this.getCharactersFiltered()}
              filters={this.state.filters}
              handleInputContent={this.handleInputContent}
              handleSelectedID={this.handleSelectedID}
              match={routerProps.match} 
            />
          )}
        ></Route>
        <Route 
          exact path='/character/:id'
          render = {routerProps => {
            const character = this.state.characters.find(character => parseInt(character.id) === parseInt(routerProps.match.params.id))
            console.log(character)
          
            return character !== undefined ? (
              <CharacterCard 
              character={character}
              match={routerProps.match}
              />
            ) :
            <p>No hay datos</p>
          }}
        >
        </Route>
      </Switch>
    );
  }
}

export default App;
