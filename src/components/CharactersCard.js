import React, { useContext, useState } from 'react';
import Characters from './Characters';
import { CharactersContext } from '../appContext';



function CharactersCard({ name, hair_color, eye_color }) {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{hair_color}</h3>
            <h3>{eye_color}</h3>
        </div>
    )
}

export default CharactersCard
