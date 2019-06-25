import React, { useState } from 'react';
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography, Paper, TextField, Button, InputLabel, FormControl }   from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom'
import { MuiInputLabel } from '@material-ui/core'
import TopBarHome from './TopBarHome';



const useStyles = makeStyles({

	headerText: {
		margin: '0 auto',
		color: '#339EF9',
		fontSize: '24px',
		letterSpacing: '-0.77px',
		lineHeight: '28px'
	},
	title: {
		color: '#339EF9',
		fontSize: '30px',
		letterSpacing: '-0.72px',
		lineHeight: '35px',
		textAlign: 'center',
		marginBottom: '49px'
	},
	appBar: {
		height: '50px'
	},
	textField: {
		display: 'block',
		width: '210px',
		height: '49px',
		margin:' 0 auto',
		marginBottom: '30px'
	},
	buttonSign: {
		margin:' 0 auto',
		display: 'block',
		height: '40px',
		width: '258px',
		borderRadius: '6px',
		backgroundColor: '#339EF9',
		boxShadow: '0 18px 40px -12px rgba(51,158,249,0.4)'
	},
	buttonAccount: {
		height: '40px',
		width: '258px',
		border: '1px solid #808080',
		borderRadius: '6px',
		backgroundColor: '#FFFFFF',
		marginTop: '30px',
		marginLeft: '79px',
		color: '#339EF9',
		fontSize: '16px',
		letterSpacing: '-0.2px',
		lineHeight: '19px'
	},
	img: {
		margin: '15px 75px'
	},
	animated: {
		color: 'red'
	}
  });


const SignUp = (props) => {
	const classes = useStyles();

	const [state, setState] = useState({
		credentials: {		
			name: '',
			password: '',
			email: ''
		}
	})

	const handleChanges = e => {
		console.log(e.target.value)
		setState({
			credentials: {
				...state.credentials,
				[e.target.name]: e.target.value
			} 			 
		});
	}

	const signup = e => {
		e.preventDefault()
		console.log("works")
	}
	
	return (		
		<>
			<TopBarHome />

			<Paper style={{ borderRadius: 0, }}>

				<img className={classes.img} src="https://i.ibb.co/jRkzxZZ/Sign-Up-Graphic.png" alt="tipsease"></img>
				<Typography className={classes.title}>Create an account</Typography>

				<form className="signupForm" onSubmit={signup}>
				<TextField
					value={state.name}
					name="name"
					label="Name"
					onChange={handleChanges}
					className={classes.textField}								
				/>

				<TextField
					value={state.email}
					name="email"
					label="Email"
					onChange={handleChanges}
					className={classes.textField}							
				/>

				<TextField
					value={state.password}
					name="password"
					label="Password"
					onChange={handleChanges}
					className={classes.textField}					
				/>	

				<button className={classes.buttonSign}>
        			Sign Up
      			</button>
				</form>	

				<FormControl> 
					<button onClick={() => console.log("account")}className={classes.buttonAccount}>
						Have an account?
					</button>	
				</FormControl>

			</Paper>
		</>
	)

}

const mapStateToProps = (state) => {
	console.log(state.loginReducer.loggingIn)
  
	return {
		signingIn: state.loginReducer.loggingIn,
		error: state.loginReducer.error
	}
}


export default connect(mapStateToProps, {})(SignUp);

