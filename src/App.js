import React from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './images/logo.png';
import {getCharacters} from './services/Api';
import './stylesheets/App.scss';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      userInput : '',
      selectedEpisodes : 'all'
    }
    this.getUserInput = this.getUserInput.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
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

  handleOptionChange(event) {
    const selectedEpisodes = event.currentTarget.value;
    console.log(selectedEpisodes);
    this.setState({
      selectedEpisodes: selectedEpisodes
    })
  }

  render() {
    const { userInput, characters, selectedEpisodes } = this.state;
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
                handleOptionChange={this.handleOptionChange}
                selectedEpisodes={selectedEpisodes}
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
