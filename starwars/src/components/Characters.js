import React from 'react';


const Characters = props => {
    console.log(props.starwarsChars);

    return (
        <div className='char-card'>
            <h2>{props.characters.name}</h2>
            <h3>mass:{props.characters.mass}</h3>
            <h3>dob:{props.characters.birth_year}</h3>

        </div>

    );

};

export default Characters;