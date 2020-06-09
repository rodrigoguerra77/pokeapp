import React, { Fragment } from 'react';
import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';

function List({pokedata}) {
    return(
        <Fragment>
            <Grid container justify="center">
                { pokedata.map((pokemon, index) => {
                    let url = process.env.REACT_APP_POKEMON_ART;
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2];

                    return <PokeCard key={index} name={pokemon.name} image={`${url}${pokeIndex}.png?raw=true`} to={`/poke-info/${pokeIndex}/${pokemon.name}`} />
                }) }
            </Grid>
        </Fragment>
    );
}

export default List;