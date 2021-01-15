import React, { createContext, useContext, useReducer, useState } from "react"

// Prepares the CONTEXT API
export const CharactersContext = createContext();

export const CharactersProvider = () => {
    const [charactes, SetCharacters] = useState([
        {
            "birth_year": "19 BBY",
            "eye_color": "Blue",
            "gender": "Male",
            "hair_color": "Blond",
            "height": "172",
            "homeworld": "https://www.swapi.tech/api/planets/1/",
            "mass": "77",
            "name": "Luke Skywalker",
            "skin_color": "Fair",
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-10T13:52:43.172000Z",

        }
    ]);
}

