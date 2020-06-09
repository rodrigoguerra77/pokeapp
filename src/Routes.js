import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PokeList from './containers/PokeListContainer';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/pokemons' component={PokeList} />
        </Switch>
    );
}

export default Routes;