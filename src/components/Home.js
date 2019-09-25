import React from 'react';
import Filter from './Filter';
import Input from './Input';
import CharacterList from './CharacterList';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Home = props => {
  const {getUserInput, userInput, characters, inputLocation, getInputLocation} = props;

  return (
    <>
    <main>
      <Filter 
        getUserInput={getUserInput} 
        userInput={userInput}
        inputLocation={inputLocation}
      />
      <Input 
        getInputLocation={getInputLocation}
        characters={characters}
        inputLocation={inputLocation}
      />
      <CharacterList
        characters={characters}
        userInput={userInput}
        inputLocation={inputLocation}

      />
    </main>
    <Footer />
    </>
  );
};

Home.propTypes = {
  getUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  characters: PropTypes.array.isRequired
};

export default Home;