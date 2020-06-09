import React,{ Component } from 'react';
import PokeDescription from "../components/PokeDescription";
import AppNav from "../components/AppNav";
import axios from "axios";

class PokeInfoContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			pokemonDescription: '',
			pokeName: '',
			pokeId: '',
		};

	}
	
	componentDidMount() {
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
        })
        .catch(error => {
            console.log(error);
        })
	}
	
	render() {
		let url = `${process.env.REACT_APP_POKEMON_ART}`;
		const { pokemonDescription, pokeName, pokeId } = this.state;

		return (
			<div className="Background-dark">
				<AppNav />
				<PokeDescription 
					name={pokeName} 
					pokeImage={`${url}${pokeId}.png?raw=true`} 
					description={pokemonDescription} 
				/>
			</div>
		);
	}

}

export default PokeInfoContainer;