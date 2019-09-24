import React from 'react';
import Filter from './Filter';
import CharacterList from './CharacterList';
import Footer from './Footer';
import Select from './Select';
import PropTypes from 'prop-types';

const Home = props => {
  const {getUserInput, userInput, characters, handleOptionChange, selectedEpisodes} = props;

  return (
    <>
    <main>
      <Filter 
        getUserInput={getUserInput} 
        userInput={userInput}
      />
      <Select 
        handleOptionChange={handleOptionChange}
        selectedEpisodes = {selectedEpisodes} />
      <CharacterList
        characters={characters}
        userInput={userInput}
        selectedEpisodes = {selectedEpisodes}
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