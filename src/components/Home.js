import React from 'react';
import Filter from './Filter';
import Select from './Select';
import CharacterList from './CharacterList';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Home = props => {
  const {getUserInput, userInput, characters, handleSelection} = props;

  return (
    <>
    <main>
      <Filter 
        getUserInput={getUserInput} 
        userInput={userInput}
      />
      <Select 
        onChange={handleSelection}
        characters={characters}
      />
      <CharacterList
        characters={characters}
        userInput={userInput}
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