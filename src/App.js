import React from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.png';
import {getCharacters} from './services/Api';
import './App.scss';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';

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
          <h1 className="header-title">Rick and Morty</h1>
          <img className="header-img" src={logo} alt="Rick and Morty logo"></img>
        </header>
        <Switch>
          <Route exact path="/" render={ ()=>{
            return (
              <Home 
                getUserInput={this.getUserInput}
                userInput={userInput}
                characters={characters}
              />
            );
          }} />
          <Route path="/character-detail/:characterId" render={routerProps => {
            return (
              <CharacterDetail 
                routerProps={routerProps}
                characters={characters}
              />
            );
          }}/>
        </Switch>
      </>
    );
  }
}

export default App;
