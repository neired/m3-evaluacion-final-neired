import React from 'react';
import Filter from './Filter';
import CharacterList from './CharacterList';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Home = props => {
  const {getUserInput, userInput, characters, selectedGender, handleSelect} = props;

  return (
    <>
    <main>
      <Filter 
        getUserInput={getUserInput} 
        userInput={userInput}
        handleSelect={handleSelect}
        selectedGender={selectedGender}
      />
      <CharacterList
        characters={characters}
        userInput={userInput}
        selectedGender={selectedGender}
      />
    </main>
    <Footer />
    </>
  );
};

Home.propTypes = {
  getUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  characters: PropTypes.array.isRequired,
  selectedGender: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired
};

export default Home;