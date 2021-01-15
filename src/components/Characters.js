import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import CharactersCard from './CharactersCard';
import { StarwarsContext } from '../appContext'

function Characters({ value }) {
    const [characters, setCharacters] = useContext(StarwarsContext);

    return (
        <React.Fragment>
            <div>
                {data.map((characters, i) => {
                    return (
                        <h5 key={i}>
                            {characters.name}
                        </h5>
                    )
                })}
            </div>
        </React.Fragment>
    );
};

export default Characters;
