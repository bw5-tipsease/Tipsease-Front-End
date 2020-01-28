import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Container, Card, CardMedia, Typography, Grid, Button, Divider, } from '@material-ui/core';
import { Grade, GradeOutlined, AddCircle, AddCircleOutline } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import TopBar from "../components/TopBar"
import { getUserData } from "../actions/index"
import { getServer } from '../actions/serverAction'
import TimeStamp from "react-timestamp"
import Loader from 'react-loader-spinner'


const useStyles = makeStyles({
	root: {
		margin: '10px 15px'
	},
	imgContentName: {
		color: 'white',
		fontSize: '36px',
		letterSpacing: '0.85px',
		lineHeight: '42px'
	},
	imgText: {
		marginTop: '50px',
		marginLeft: '32px',
		paddingLeft: '0px',
	},
	leaveTipButton: {
		height: '81px',
		background: 'linear-gradient(136.07deg, #6CD6FA 0%, #3A7AF2 100%)',
		color: 'white',
		fontSize: '2rem',
		borderTopLeftRadius: '20px',
    	borderTopRightRadius: '20px'
	},
	contBody: {
		marginLeft: '32px',
		paddingLeft: '0px',
		marginTop: '32px',
		marginBottom: '130px'
	},
	star: {
		fontSize: '32px'
	},
	location: {
		fontFamily: "Open Sans",
		fontSize: '24px',
		letterSpacing: '-0.02px',
		lineHeight: '33px',
	},	
	locationTitle: {
		fontFamily: "Open Sans",
		fontSize: '24px',
		letterSpacing: '-0.02px',
		lineHeight: '33px',
		marginBottom: '10px',
		fontWeight: '600'
	},
	transTitle: {
		fontFamily: "Open Sans",
		fontSize: '24px',
		letterSpacing: '0.8px',
		lineHeight: '33px',
		marginBottom: '10px',
		fontWeight: '600',
	},
	divider: {
		color: '#979797',
		width: '90%',
		height: '1px',
		border: '1px solid #979797',
		margin: '27px 0'
	},
	date: {
		fontFamily: "Open Sans",
		fontSize: '18px',
		letterSpacing: '-0.5px',
		lineHeight: '24px'
	},
	amount: {
		color: '#20D214',
		fontFamily: "Open Sans",
		fontSize: '18px',
		letterSpacing: '-0.5px',
		lineHeight: '24px'
	},
	tag: {
		fontFamily: "Open Sans",
		fontSize: '18px',
		letterSpacing: '0.6px',
		lineHeight: '24px'
	},
	imgContent: {
		fontFamily: "Open Sans",
		fontSize: '20px',
		letterSpacing: '-0.25px',
		lineHeight: '27px',
		fontWeight: '600',
		color: 'white'
	},
	topGrid: {
		background: 'linear-gradient(136.07deg, #6CD6FA 0%, #3A7AF2 100%)',
		padding: '30px',
		alignItems: 'flex-end'
	},
	profileImg: {
		borderRadius: '100%'
	}
})

const UserProfile = (props) => {
	const classes = useStyles();

	useEffect(() => {
		let id = localStorage.getItem('id')
		props.getUserData(id)
  	},[])	


	// console.log(props.userInfo.transactions.length)
	// console.log(props.servers)

	// props.fetchingUser ? (
	// 	<Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
	// ) : ()

	return (
		<>
			<TopBar {...props}/>

				<Card>
					<Grid className={classes.topGrid} container wrap='nowrap'> 	

						<Grid item>
							<CardMedia className={classes.profileImg} src={props.userInfo.thumbnail_url} component='img' />					
						</Grid>

						<Grid item xs={8}>	
							<Container className={classes.imgText}>						
								<Typography variant='h5' className={classes.imgContentName}>{props.userInfo.name}</Typography>
								<Typography variant='subtitle2' className={classes.imgContent}>{props.userInfo.email}</Typography>
							</Container>						
						</Grid>					
					</Grid>	

					<Container className={classes.contBody}>


						<Divider className={classes.divider} />

						{props.fetchingUser && (
							<div className="key spinner">
								<Loader type="Puff" color="#204963" height="60" width="60" />
								<p>Loading Data</p>
							</div>
						)}

						{props.error && <h4>{props.error}</h4>}

							<Typography className={classes.transTitle}>Transactions</Typography>
							{!props.fetchingUser && props.userInfo.transactions.length > 0 && (
							<>
							<Grid container wrap='nowrap' spacing='5'>
								{console.log(props.userInfo.transactions, "trans from userProfile.js")}
								{/* <Grid item xs={5}>	
									{props.userInfo.transactions.map((trans, i) => <Grid key={trans.id} className={classes.date}><TimeStamp relative date={trans.created_at} /></Grid>)}				
								</Grid> */}

								<Grid item xs={5}>		
									{props.userInfo.transactions.map((trans, i) => <Grid key={trans.id} className={classes.date}>{trans.server_name}</Grid>)}				
								</Grid>

								<Grid item xs={2}>	
									{props.userInfo.transactions.map((trans, i) => <Grid key={trans.id} className={classes.amount}>${trans.tip_paid}</Grid>)}	
								</Grid>
							</Grid>
							</> 
						)}

						<Divider className={classes.divider} />

						<Typography className={classes.transTitle}>Favorite Restaurant</Typography>
						<Typography className={classes.tag}>"Sushi"</Typography>				
					</Container>				
				</Card>		
		</>
	)
}

const mapStateToProps = (state) => {
	console.log(state.userInfoReducer.userInfo)
	return {
		userInfo: state.userInfoReducer.userInfo, 
		fetchingUser: state.userInfoReducer.fetchingUser,
		error: state.userInfoReducer.error 
	}	
}

export default connect(mapStateToProps, { getUserData, getServer })(UserProfile);