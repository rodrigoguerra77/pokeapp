import React from 'react';
import PokeCard from "./PokeCard";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";


function PokeDescription ({ 
	pokeImage, 
	name, 
	description, 
	height,
	weight,
	types,
	classes }) {
	return(
        <Grid container 
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center">
			<Grid item md={3}>
				<PokeCard image={pokeImage} name={name} />
			</Grid>
			<Grid item md={9}>
				<div className={classes.descriptionContainer}>
					<Paper className={classes.descriptionBox} >
						<Typography variant='body1' component="p" className={classes.descriptionText}>
							{description}
						</Typography>
					</Paper>
				</div>
				<div className={classes.descriptionContainer}>
					<Paper className={classes.descriptionBox} >
						<Typography variant='body1' component="p" className={classes.descriptionText}>
							Peso: {weight}
						</Typography>
						<Typography variant='body1' component="p" className={classes.descriptionText}>
							Altura: {height}
						</Typography>
						{types.map((item, index) => {
							return(
								<Typography key={index} variant='body1' component="p" className={classes.descriptionText}>
									Tipo: {item.type.name}
								</Typography>
							);
						})}
					</Paper>
				</div>
			</Grid>
		</Grid>
	);
}


export default withStyles({
	descriptionContainer:{
		margin: '2em',
	},
	descriptionBox:{
		padding: '2em',
        height: 'auto'
	},
	descriptionText:{
		fontSize: '1em',
		textAlign: 'justify',
		fontFamily: 'Verdana'
	}
})(PokeDescription);