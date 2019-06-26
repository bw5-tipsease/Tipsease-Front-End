import React from 'react';
import { AppBar, Toolbar, Typography, }   from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom'

const useStyles = makeStyles({

	appBar: {
		height: '50px'
	},
	headerText: {
		margin: '0 auto',
		color: '#339EF9',
		fontSize: '24px',
		letterSpacing: '-0.77px',
		lineHeight: '28px'
	},
	a: {
		color: '#339EF9',
		textDecoration: 'none'
	}

  });


const TopBarHome = (props) => {
	const classes = useStyles();

	return (

		<AppBar className={classes.appBar} position="static" color="inherit" >
			<Toolbar>

				<Typography
				className={classes.headerText} 
				align="justify"
				variant="h6" 
				>
					About
				</Typography> 

				<Typography
				className={classes.headerText} 
				align="justify"
				variant="h6" 
				>
					<NavLink className={classes.a} to="/">Tipsease</NavLink>
				</Typography> 

				<Typography
				className={classes.headerText} 
				align="justify"
				variant="h6" 
				>
					<NavLink className={classes.a} to="/login">Sign In</NavLink>
				</Typography> 

			</Toolbar>
		</AppBar>

	)
}

export default TopBarHome;