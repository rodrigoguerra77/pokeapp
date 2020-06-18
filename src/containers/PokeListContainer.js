import React, { Component } from 'react';
import axios from 'axios';
import List from '../components/List';
import AppNav from '../components/AppNav';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

class PokeListContainer extends Component {

    state = {
        pokeData: [],
        currentOffset: 0,
        pageCounter: 1,
        showSpinner: false
    }

    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState){
        const { currentOffset } = this.state;
        if(currentOffset !== prevState.currentOffset){
            if(currentOffset < 0){
                this.setState({
                    currentOffset: 0,
                    pageCounter: 1
                });
                this.fetchData(prevState.currentOffset);
            }
            this.fetchData(currentOffset);
        }
    }

    fetchData = (offset = 0) => {
        this.setState({
            showSpinner: true
        });
        const url = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon`;
        let params = {
            offset: offset,
            limit: 8
        }
        axios.get(url, { params })
        .then(res => {
            const { results } = res.data;

            this.setState({
              pokeData: results,
              showSpinner: false
            });

        })
        .catch(error => {
            console.log(error);
        })
    }

    increment = () => {
        const { currentOffset, pageCounter } = this.state;
        this.setState({
            currentOffset: currentOffset + 8,
            pageCounter: pageCounter + 1
        });
        this.fetchData(currentOffset);
        window.scrollTo(0, 0);
    }

    decrement = () => {
        const { currentOffset, pageCounter } = this.state;
        this.setState({
            currentOffset: currentOffset - 8,
            pageCounter: pageCounter - 1
        });
        this.fetchData(currentOffset);
        window.scrollTo(0, 0);
    }

    render(){
        const { pokeData, pageCounter, showSpinner } = this.state;

        return(
            <div className="Background-dark">
                <AppNav />
                { showSpinner ? <Spinner /> : null }
                <List pokedata={pokeData} />
                <Pagination 
                    increment={this.increment} 
                    decrement={this.decrement} 
                    page={pageCounter} 
                />
            </div>
        );
    }
}

export default PokeListContainer;