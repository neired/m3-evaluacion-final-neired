import React from 'react';
import Filter from './Filter';
import CharacterList from './CharacterList';
import Footer from './Footer';
import PropTypes from 'prop-types';
import Radio from './Radio';

const Home = props => {
  const {getUserInput, userInput, characters, handleRadioChange, selectedRadio} = props;

  return (
    <>
    <main>
      <Filter 
        getUserInput={getUserInput} 
        userInput={userInput}
      />
      <Radio 
        handleRadioChange={handleRadioChange}
      />
      <CharacterList
        characters={characters}
        userInput={userInput}
        selectedRadio={selectedRadio}
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
  handleRadioChange: PropTypes.func.isRequired,
  selectedRadio: PropTypes.string.isRequired
};

export default Home;