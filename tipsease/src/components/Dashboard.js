import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Paper, IconButton  }   from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import WaiterList from "./WaiterList"

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
	headerText: {
		margin: '0 auto',
		color: '#2196f3'
	},
	input: {
		marginLeft: '10px',
		flex: 1,
	},
	title: {
		fontFamily: 'fantasy',
		fontSize: '2rem',
		marginLeft: '40px'
	},
	iconButton: {
		padding: '10px'		
	},
  });

const  Dashboard = () => {	
	const classes = useStyles();	

		return (

			<>

				<AppBar position="static" color="inherit">
					<Toolbar>
						<Typography
						className={classes.headerText} 
						align="justify"
						variant="h6" 
						>
							TipsEase
						</Typography> 
					</Toolbar>
				</AppBar>

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

				<Typography 
				className={classes.title}
				>
					Service Worker
				</Typography>			

				<WaiterList />				

			</>
		);
	
}

export default Dashboard;



