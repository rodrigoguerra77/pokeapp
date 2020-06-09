import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <Link to='/pokemons'>
                    <img src={process.env.PUBLIC_URL + '/images/pokemon.png'} className="App-logo" alt="Pokemon" />
                    <br />
                    <img src={process.env.PUBLIC_URL + '/images/pokeball.png'} className="App-logo" alt="Pokemon" />
                </Link>
            </header>
        </div>
    );
};

export default Home;