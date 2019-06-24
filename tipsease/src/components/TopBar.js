import React from 'react';
import { AppBar, Toolbar, Typography, }   from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

	headerText: {
		margin: '0 auto',
		color: '#2196f3'
	}

  });


const TopBar = (props) => {
	const classes = useStyles();

	return (

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
	)
}

export default TopBar;