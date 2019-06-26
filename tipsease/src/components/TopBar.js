import React from 'react';
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography, Avatar}   from '@material-ui/core/';
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
	console.log(props.waiters[0].name)
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
				<Avatar alt={props.waiters[0].name} src='https://i.ibb.co/bJHx1V7/DSC0496-rs.png' />				
			</Toolbar>
		</AppBar>
	)
}

const mapStateToProps = (state) => {
	console.log(state.waiterReducer.waiters)
	return {
		waiters: state.waiterReducer.waiters  
	}	
}

export default connect(mapStateToProps, {})(TopBar);