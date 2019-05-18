import React from 'react';


const Characters = props => {
    console.log(props.starwarsChars);

    return (
        <div className='char-card'>
            <p>name:{props.characters.name}</p>
            <p>homeworld:{props.characters.homeworld}</p>
            <p>born:{props.characters.birth_year}</p>

        </div>

    );

};

export default Characters;