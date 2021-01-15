import React, { createContext, useContext, useReducer, useState, useEffect } from "react"

// Prepares the CONTEXT API
export const StarwarsContext = createContext();

export const StarwarsProvider = (props) => {
    const [characters, SetCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        async function fetchCharaters() {
            let res = await fetch('https://www.swapi.tech/api/people/?format=json');
            let data = await res.json();
            SetCharacters(data.results);
        }

        async function fetchPlanets() {
            let res = await fetch('https://www.swapi.tech/api/planets/?format=json');
            let data = await res.json();
            setPlanets(data.results);
        }

        fetchCharaters();
        fetchPlanets();
    }, [])
    console.log('data', characters)
    return (
        <StarwarsContext.Provider value={[characters, SetCharacters, planets, setPlanets]}>
            {props.children}
        </StarwarsContext.Provider>
    );
};

