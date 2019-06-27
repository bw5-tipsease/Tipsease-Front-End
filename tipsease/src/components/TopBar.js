import React from 'react';
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography, Avatar}   from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBackIos } from '@material-ui/icons';

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
	},
	arrow: {
		color: '#339EF9',
    	fontSize: '30px'
	}

  });


const TopBar = (props) => {
	console.log(props)
	const classes = useStyles();

	const previous = e => {
		props.history.goBack()
	}

	return (

		<AppBar className={classes.appBar} position="static" color="inherit" >
			<Toolbar>
				<ArrowBackIos className={classes.arrow} onClick={previous}/>
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