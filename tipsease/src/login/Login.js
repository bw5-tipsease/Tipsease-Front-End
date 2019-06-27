import React, { useState } from 'react';
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography, Paper, TextField, Button, InputLabel, Grid }   from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import TopBarHome from './TopBarHome';
import { tablet } from "../styles/vars"
import { login } from "../actions"


const useStyles = makeStyles({

	headerText: {
		margin: '0 auto',
		color: '#339EF9',
		fontSize: '24px',
		letterSpacing: '-0.77px',
		lineHeight: '28px'
	},
	paper: {
		borderRadius: 0,
		paddingBottom: '68px'
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
		display: 'block',
		backgroundColor: '#FFFFFF',
		marginTop: '30px',
		margin: '0 auto',
		color: '#339EF9',
		fontSize: '16px',
		letterSpacing: '-0.2px',
		lineHeight: '19px'
	},
	img: {
		display: 'block',
		margin: '0 auto',
		paddingTop: '15px'
	},
	gridCont: {
		paddingTop: '20px',

		[tablet]: {
			flexDirection: 'row-reverse',
    		justifyContent: 'space-evenly',
    		paddingTop: '151px',
			alignItems: 'end'
		}
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
		// console.log("works")
		console.log(props)
		props.login(state.credentials)
			.then(() => {
			// const route = this.props.location.state.from || '/list-of-friends';
			props.history.push(`/dashboard`)
			})
	}

	const goSignUp = e => {
		e.preventDefault() 
		props.history.push('/signup') 
	}

	return (
		<>
			<TopBarHome />

			<Paper className={classes.paper}>
				<Grid container direction='column' alignItems='center' className={classes.gridCont}>

					<Grid item>
						<img className={classes.img} src="https://i.ibb.co/CmY9CWs/Sign-In-Graphic.png" alt="tipsease"></img>
					</Grid>

					<Grid item>
						<form className="loginForm" onSubmit={login}>
							<Typography className={classes.title}>Welcome back!</Typography>
								<TextField
									value={state.name}
									name="loginName"
									label="Username/Email"
									onChange={handleChanges}
									className={classes.textField}								
								/>

								<TextField
									// type="password"
									value={state.password}
									name="password"
									label="Password"
									onChange={handleChanges}
									className={classes.textField}					
								/>	

								<button className={classes.buttonSign}>
									Sign In
								</button>
							</form>

							<form>
								<button onClick={goSignUp} className={classes.buttonAccount}>
									Need an account?
								</button>
							</form>
					</Grid>							
				
				</Grid>
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


export default connect(mapStateToProps, {login})(Login);