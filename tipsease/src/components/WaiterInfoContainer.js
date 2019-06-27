import React, { Component } from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import Waiter from "./Waiter"
import Location from "./Location"
import WaiterProfile from "./WaiterProfile"
import { Typography }   from '@material-ui/core/';

const useStyles = makeStyles({

	title: {
		fontFamily: 'Roboto',
		fontSize: '36px',
		fontWeight: 'bold',
		letterSpacing: '-0.45px',
		lineHeight: '42px',
		marginLeft: '52px'
	}

  });

const WaiterInfoContainer = (props) => {
	const classes = useStyles();	
	console.log(props)

	return (
		<>
			<Typography className={classes.title}>Service Worker</Typography>	
			{props.waiters.map((waiter, i) => {
				return (
					<Waiter 
					waiter={waiter} 
					key={i}
					{...props}
					/>
				)
			})}
			
			<Typography className={classes.title}>Locations</Typography>
			{props.waiters.map((waiter, i) => {
				return (
					<Location 
					waiter={waiter} 
					key={i}
					{...props}
					/>
				)
			})}

			{/* <WaiterProfile waiters={this.props.waiters}/> */}
			
		</>
	);
	
}

const mapStateToProps = (state) => {
	console.log(state.waiterReducer.waiters)
	return {
		waiters: state.waiterReducer.waiters  
	}	
}

export default connect(mapStateToProps, {})(WaiterInfoContainer);
