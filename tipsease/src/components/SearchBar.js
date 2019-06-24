import React from 'react';
import { InputBase, Paper, IconButton, }   from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({

	paper: {
		backgroundColor: '#f7f7f7',
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '85%',
		height:'35px',
   		margin: '20px auto'
	},
	input: {
		marginLeft: '10px',
		flex: 1,
	},
	iconButton: {
		padding: '10px'		
	},

  });


const SearchBar = (props) => {
	const classes = useStyles();

	return (

		<Paper className={classes.paper}>
			<InputBase
				className={classes.input}
				placeholder="Search Service Worker"
				inputProps={{ 'aria-label': 'Search Google Maps' }}
			/>
			<IconButton 
			className={classes.iconButton} 
			aria-label="Search"
			>
				<SearchIcon />
			</IconButton>				
		</Paper>

	)
}

export default SearchBar;