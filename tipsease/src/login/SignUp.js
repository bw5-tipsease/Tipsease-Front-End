import React from 'react';
import { AppBar, Toolbar, Typography, Paper, TextField, Button, InputLabel }   from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';


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

	return (

		<>
			<AppBar className={classes.appBar} position="static" color="inherit" >
				<Toolbar>

					<Typography
					className={classes.headerText} 
					align="justify"
					variant="h6" 
					>
						About
					</Typography> 

					<Typography
					className={classes.headerText} 
					align="justify"
					variant="h6" 
					>
						Tipsease
					</Typography> 

					<Typography
					className={classes.headerText} 
					align="justify"
					variant="h6" 
					>
						Sign In
					</Typography> 

				</Toolbar>
			</AppBar>
		
			<Paper>

				<img className={classes.img} src="https://i.ibb.co/jRkzxZZ/Sign-Up-Graphic.png" alt="tipsease"></img>
				<Typography className={classes.title}>Create an account</Typography>

				<TextField
					label="Name"
					id="margin-none"
					className={classes.textField}
					classes={{
						animated: classes.animated
					}}									
				/>

				<TextField
					label="Email"
					id="margin-none"
					className={classes.textField}					
				/>

				<TextField
					label="Password"
					id="margin-none"
					className={classes.textField}					
				/>	

				<Button className={classes.buttonSign}>
        			Sign Up
      			</Button>

				<button className={classes.buttonAccount}>
       				Have an account?
      			</button>
							

			</Paper>
		</>
	)

}

export default SignUp;