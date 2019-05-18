import React from 'react';
import Characters from './Characters';

const CharacterList = props => {
    return (
        <div className="char-list">
        {props.starwarsChars.map(characters => (
            <Characters 
            character={props.characters}
            />
        ))}
        </div>
    );
};

export default CharacterList;