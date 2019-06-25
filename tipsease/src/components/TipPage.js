import React, { useState } from 'react';
import { Paper, TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Check, Money, AttachMoney } from '@material-ui/icons';



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

// const numClick = e => {
// 	console.log(e.target.id)
// 	setState({
// 		numInput: e.target.id
// 	})
// }

const TipPage = () => {
	const classes = useStyles();

	const [state, setState] = useState({
		numInput: '',
	})
	
	const numClick = e => {
		console.log(e.target.id)
		setState({
			numInput: e.target.id
		})
	}

	const nums = ['1','2','3','4','5','6','7','8','9']

		return (
			<>
				<Paper className={classes.root}>

					<input
						className={classes.userNameText}
						placeholder="@username"
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
								value={state.numInput}
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

						<Grid  item xs={4}><Button className={classes.button}>X</Button></Grid>
						<Grid  item xs={4}><Button className={classes.button}>0</Button></Grid>
						<Grid  item xs={4}>
							<Button className={classes.checkButton}>
								<Check style={{ fontSize: 60, color: 'white' }}/>
							</Button>
						</Grid>					
					
					</Grid>			

				</Paper>
			</>
		);
	
}

export default TipPage;