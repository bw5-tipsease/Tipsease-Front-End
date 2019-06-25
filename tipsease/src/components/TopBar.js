import React from 'react';
import { AppBar, Toolbar, Typography, }   from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

	headerText: {
		margin: '0 auto',
		color: '#339EF9',
		fontSize: '24px',
		letterSpacing: '-0.77px',
		lineHeight: '28px'
	},
	appBar: {
		height: '50px'
	}

  });


const TopBar = (props) => {
	const classes = useStyles();

	return (

		<AppBar className={classes.appBar} position="static" color="inherit" >
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