import React from 'react'

const ApiFetch = async (
    changeState
) => {

    try {
        const response = await fetch(
            `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`,
            {mode: "cors",});
    
    if (response.ok) {
        const result = await response.json();
        console.log(result)
        changeState(result.pokemon);
    } else {
        return false;
    }
        } catch (error) {
            console.log(error);
            throw error;
        }
    
    
    
    
    
    
    
    
  
    
}

export default ApiFetch



