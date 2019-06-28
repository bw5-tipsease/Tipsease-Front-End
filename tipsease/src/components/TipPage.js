import React, { useState } from 'react';
import { Paper, TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Check, Money, AttachMoney } from '@material-ui/icons';
import { connect } from "react-redux";
import TopBar from "../components/TopBar"
import { addTran } from "../actions/transAction"



const useStyles = makeStyles({
	
	root: {
		height: '212px',
		width:' 100%',
		borderRadius: '0',
		background:'linear-gradient(136.07deg, #6CD6FA 0%, #3A7AF2 100%)'
	},
	userNameText: {
		width: '210px',
		marginTop: '115px',
		height: '42px',
		marginLeft: '32px',
		fontSize: '36px',
		border: 'none',
		color: 'white',
		background: 'none'
	},
	tipNumber: {
		color: 'red',
		width: '152px',		
		height: '42px',		
		fontSize: '38px',
		border: 'none',
		color: '#20D214',
		background: 'none',
	},
	tipCont: {
		paddingTop: '40px',
		paddingLeft: '48px',
		paddingBottom: '85px'
	},
	button: {
		height: '72px',
		color: '#808080',
		fontSize: '44px',
		width: '72px',
		background: '#E9E8E8',
		marginBottom: '32px',
		borderRadius: '14px',
		lineHeight: '0'
	},
	checkButton: {
		width: '72px',
		height: '72px',
		marginBottom: '32px',
		borderRadius: '14px',
		background: '#339EF9',
		
	}
})

const TipPage = (props) => {
	const classes = useStyles();
	let username = props.waiters[props.match.params.id - 1].username
	let serverId = props.waiters[props.match.params.id - 1].id	
	
	const [tip, setTip] = useState('')

	const numClick = e => {
		console.log(e.target.id)

		if(tip === '' || tip === '0') {
			setTip(e.target.id)
		} else {
			setTip(tip + e.target.id)
		}		
	}

	const clear = e => {
		setTip('0')
	}

	const payment = e => {
		e.preventDefault()
		// console.log('works')
		let trans = {
			tipper_id: localStorage.getItem('id'),
			server_id: serverId,
			tip_paid: tip
		}
		props.addTran(trans)
		props.history.push(`/dashboard/tip/${props.match.params.id}/pay/${username}`) 
	}

	const nums = ['1','2','3','4','5','6','7','8','9']

	return (
		<>
			<TopBar {...props}/>
			<Paper className={classes.root}>

				<input
					className={classes.userNameText}
					placeholder="@username"
					value={username}
					type='text'
					name='username'
					// value={values.name}
					onChange={() => {}}
					margin="normal"
				/>

			</Paper>

			<Paper className={classes.tipCont}>

				<Grid container alignItems='center'>
					<Grid item xs={2}>
						<AttachMoney style={{ fontSize: 50, color: '#808080' }}/>
					</Grid>
					<Grid item xs>
						<input
							className={classes.tipNumber}
							placeholder="Enter Tip"
							type='text'
							name='username'
							value={tip}
							onChange={() => {}}
							margin="normal"
						/>
					</Grid>
				</Grid>

				<Grid container style={{ marginTop: '24px' }}>
					
					{nums.map(num => {
						return (
							<Grid key={num} item xs={4}> <button id={num} onClick={numClick} className={classes.button}>{num}</button></Grid>
						)
					})}

					<Grid  item xs={4}><button className={classes.button} onClick={clear}>X</button></Grid>
					<Grid  item xs={4}><button className={classes.button} onClick={numClick} id={0}>0</button></Grid>
					<Grid  item xs={4}>
						<Button className={classes.checkButton} onClick={payment}>
							<Check style={{ fontSize: 60, color: 'white' }}/>
						</Button>
					</Grid>					
				
				</Grid>			

			</Paper>
		</>
	);	
}

const mapStateToProps = (state) => {
	console.log(state.waiterReducer.waiters)
	return {
		waiters: state.waiterReducer.waiters  
	}	
}

export default connect(mapStateToProps, {addTran})(TipPage);