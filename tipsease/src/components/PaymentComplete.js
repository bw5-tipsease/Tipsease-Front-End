import React, { useEffect } from "react";
import TopBar from "./TopBar"
import { Check } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({

	a: {
		color: '#20D214',
		height: '269px',
		width: '269px',
		display: 'block',
		margin: '0 auto',
		marginTop: '105px'
	},
	txt: {
		color: '#656565',
		fontFamily: "Open Sans",
		fontSize: '48px',
		letterSpacing: '0.9px',
		lineHeight: '65px',
		margin: '0 auto',
		width: '250px'
	},
	paper: {
		paddingBottom: '180px'
	}
  });

//   useEffect(() => {

//   },[])


const PaymentComplete = (props) => {
	console.log(props, 'props from payment complete')
	let username = props.match.params.id
	const classes = useStyles();	

	return (
	
		<Paper className={classes.paper}>
		<TopBar {...props}/>
			<Check className={classes.a}/>
			<Typography className={classes.txt}>You paid</Typography>
			<Typography className={classes.txt}>{username}</Typography>
		</Paper>
		

	)
}

export default PaymentComplete;