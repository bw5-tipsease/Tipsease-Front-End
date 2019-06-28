import React, { Component, useEffect } from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import Waiter from "./Waiter"
import WaiterNew from "./WaiterNew"
import Location from "./Location"
import WaiterProfile from "./WaiterProfile"
import { Typography }   from '@material-ui/core/';
import { getServerAll } from '../actions/serverAction'
import { getRestaurantAll } from '../actions/restaurantsAction'
import { getTransAll } from '../actions/transAction'

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

	useEffect(() => {
		// let id = localStorage.getItem('id')
		// props.getServerAll()
		// props.getRestaurantAll()
		// props.getTransAll()
  	},[])

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

			{/* {props.servers.map((server, i) => {
				return (
					<WaiterNew 
					server={server} 
					key={i}
					{...props}
					/>
				)
			})} */}
			
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
		</>
	);
	
}

const mapStateToProps = (state) => {
	console.log(state.restaurantReducer)
	return {
		waiters: state.waiterReducer.waiters, 
		servers: state.waiterReducer.servers,
		restaurants: state.restaurantReducer.restaurants 
	}	
}

export default connect(mapStateToProps, { getServerAll, getRestaurantAll, getTransAll })(WaiterInfoContainer);
