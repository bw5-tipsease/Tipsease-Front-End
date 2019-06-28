import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem, CardMedia}   from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBackIos } from '@material-ui/icons';
import { getUserData } from '../actions'

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
	console.log(props.users)
	const classes = useStyles();

	useEffect(() => {
		let id = localStorage.getItem('id')
		props.getUserData(id)
  	},[])


	const [anchorEl, setAnchorEl] = useState(null)

	const openMenu = e => {
		setAnchorEl(e.currentTarget)
	}

	const closeMenu = e => {
		setAnchorEl(null)
	}

	const previous = e => {
		props.history.goBack()
	}

	const logout = e => {
		console.log('works')
		localStorage.clear();
		props.history.push('/') 
	}

	const goToProfile = e => {
		console.log('works')
		let id = localStorage.getItem('id')
		// props.getUserData(id)
		props.history.push(`/dashboard/user/${id}`)
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
				{/* <CardMedia className={classes.img} image='https://i.ibb.co/379MSJF/tipsease-Logo.png' component='img' /> */}
				<Avatar onClick={openMenu} alt={props.users.name} src={props.users.thumbnail_url} />
				<Menu 
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={closeMenu}
				>
					<MenuItem onClick={() => {props.history.push('/dashboard')}}>Dashboard</MenuItem>
					<MenuItem onClick={goToProfile}>Profile</MenuItem>
					<MenuItem onClick={logout}>Logout</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	)	
}

const mapStateToProps = (state) => {
	console.log(state.userInfoReducer)
	return {
		users: state.userInfoReducer.userInfo  
	}	
}

export default connect(mapStateToProps, {getUserData})(TopBar);