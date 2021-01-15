import React, { useState } from 'react'
import { Link } from "react-router-dom";
import CharactersCard from './CharactersCard';

function Characters() {

    return (
        <React.Fragment>
            {
                charactes.map(charactes => (
                    <CharactersCard
                        name={charactes.name}
                        hair_color={charactes.hair_color}
                        eye_color={charactes.eye_color}
                    />
                ))
            }
        </React.Fragment>
    );
};

export default Characters;
