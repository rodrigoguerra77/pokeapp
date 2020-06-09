import React, { Component } from 'react';
import axios from 'axios';
import List from '../components/List';
import AppNav from '../components/AppNav';

class PokeListContainer extends Component {

    state = {
        pokeData: []
    }

    componentDidMount(){
        const url = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon`;
        axios.get(url)
        .then(res => {
            const pokeData = res.data.results;

            this.setState({
              pokeData 
            })

        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        const { pokeData } = this.state;

        return(
            <div className="Background-dark">
                <AppNav />
                <List pokedata={pokeData} />
            </div>
        );
    }
}

export default PokeListContainer;