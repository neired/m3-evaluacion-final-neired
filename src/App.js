import React from 'react';
import logo from './logo.png';
import {getCharacters} from './services/Api';
import './App.scss';
import CharacterList from './components/CharacterList';
import Filter from './components/Filter';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      userInput : ''
    }
    this.getUserInput = this.getUserInput.bind(this);
  }

  componentDidMount() {
    this.paintCharacters();
  }

  paintCharacters() {
    getCharacters(this.state.userInput)
      .then(data => {
        this.setState({
          characters: data.results,
        });
      });
  }

  getUserInput(event) {
    const userInput = event.currentTarget.value;
    this.setState({
      userInput : userInput
    })
  }

  render() {
    const { userInput, characters } = this.state;
    return (
      <>
        <header className="app-header">
          <img className="header-img" src={logo} alt="Rick and Morty logo"></img>
        </header>
        <main>
          <Filter getUserInput={this.getUserInput} userInput={userInput}/>
          <CharacterList characters={characters} userInput={userInput}/>
        </main>
      </>
    );
  }
}

export default App;
