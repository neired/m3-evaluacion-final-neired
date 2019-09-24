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
      selectedRadio: ''
    }
    this.getUserInput = this.getUserInput.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
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

  handleRadioChange(event) {
    const selectedRadio = event.currentTarget.value;
    console.log(selectedRadio);
    this.setState({
      selectedRadio: selectedRadio
    })
  }

  render() {
    const { userInput, characters, selectedRadio } = this.state;
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
                handleRadioChange={this.handleRadioChange}
                selectedRadio={selectedRadio}
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
