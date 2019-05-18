import React from 'react';
import Characters from './Characters';

const CharacterList = props => {
    return (
        <div className="char-list">

        {props.starwarsChars.map(charactersMapped => {
            return <Characters characters={charactersMapped}/>
        })}

        </div>
    );
};

export default CharacterList;