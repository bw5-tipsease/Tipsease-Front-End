import React, { useState } from 'react';
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography, Paper, TextField, Button, InputLabel }   from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
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
		margin: '15px 110px'
	},
	animated: {
		color: 'red'
	}
  });


const Login = (props) => {
	const classes = useStyles();

	const [state, setState] = useState({
		credentials: {		
			loginName: '',
			password: '',
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

	const login = e => {
		e.preventDefault()
		console.log("works")
	}

	return (
		<>
			<TopBarHome />

			<Paper style={{ borderRadius: 0, }}>

				<img className={classes.img} src="https://i.ibb.co/CmY9CWs/Sign-In-Graphic.png" alt="tipsease"></img>
				<Typography className={classes.title}>Welcome back!</Typography>

				<form className="loginForm" onSubmit={login}>
					<TextField
						value={state.name}
						name="loginName"
						label="Username/Email"
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

					<Button className={classes.buttonSign}>
						Sign In
					</Button>
				</form>

				<form>
					<button className={classes.buttonAccount}>
						Need an account?
					</button>
				</form>							

			</Paper>
		</>
	)
}

const mapStateToProps = (state) => {
	console.log(state.loginReducer.loggingIn)
  
	return {
		loggingIn: state.loginReducer.loggingIn,
		error: state.loginReducer.error
	}
}


export default connect(mapStateToProps, {})(Login);