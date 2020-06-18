import React,{ Component } from 'react';
import PokeDescription from "../components/PokeDescription";
import AppNav from "../components/AppNav";
import axios from "axios";
import Spinner from '../components/Spinner';

class PokeInfoContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			pokemonDescription: '',
			pokeName: '',
			pokeId: '',
			height: '',
			weight: '',
			types: [],
			showSpinner: false
		};

	}
	
	componentDidMount() {
		this.setState({
            showSpinner: true
        });
		const { match } = this.props;
		const pokeId = match.params.pokeIndex;
		const pokeName = match.params.pokeName;
		const pokeDescriptionUrl = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon-species/${pokeId}/`;
		axios.get(pokeDescriptionUrl)
		.then(res =>{
			const { flavor_text_entries } = res.data;
			this.setState({
				pokemonDescription: `${flavor_text_entries[26].flavor_text} ${flavor_text_entries[34].flavor_text} ${flavor_text_entries[50].flavor_text}`,
				pokeName,
				pokeId
			});
			this.getPokeStats();
			this.setState({
              showSpinner: false
			});
        })
        .catch(error => {
            console.log(error);
        })
	}

	getPokeStats() {
		const { pokeId } = this.state;
		axios.get(`${process.env.REACT_APP_POKE_API_BASE_URL}pokemon/${pokeId}/`)
		.then(res => {
			const { height, weight, types } = res.data;
			this.setState({
				height,
				weight,
				types
			})
		})
		.catch(error => {
			console.log(error);
		});
	}
	
	render() {
		let url = `${process.env.REACT_APP_POKEMON_ART}`;
		const { 
			pokemonDescription, 
			pokeName, 
			pokeId, 
			height, 
			weight, 
			types, 
			showSpinner } = this.state;

		return (
			<div className="Background-dark">
				<AppNav />
				{ showSpinner ? <Spinner /> :  
					<PokeDescription 
						name={pokeName} 
						pokeImage={`${url}${pokeId}.png?raw=true`} 
						description={pokemonDescription}
						height={height}
						weight={weight}
						types={types}
					/>
				}
			</div>
		);
	}

}

export default PokeInfoContainer;