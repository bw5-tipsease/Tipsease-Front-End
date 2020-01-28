import React from 'react';
import { connect } from "react-redux";
import { Container, Card, CardMedia, Typography, Grid, Button, Divider, } from '@material-ui/core';
import { Grade, GradeOutlined, AddCircle, AddCircleOutline } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import StarRatingComponent from 'react-star-rating-component';
import TopBar from "../components/TopBar"

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
		color: '#FFFFFF'
	}
})

const WaiterProfile = (props) => {
	const classes = useStyles();
	let index = props.match.params.id - 1

	const goToTip = e => {
		e.stopPropagation()
		props.history.push(`/dashboard/tip/${props.waiters[index].id}`)
	}

	return (
		<> 
			<TopBar {...props}/>
			<Card>

				<CardMedia image={props.waiters[index].img}>
					<Grid container wrap='nowrap'> 
						
						<Grid item xs={8}>	
							<Container className={classes.imgText}>						
								<Typography variant='h5' className={classes.imgContentName}>{props.waiters[index].name}</Typography>
								<Typography variant='subtitle2' className={classes.imgContent}>{props.waiters[index].username}</Typography>
								<Typography variant='subtitle1' className={classes.imgContent}>{props.waiters[index].title}</Typography>					
							</Container>						
						</Grid>

						<Grid item xs={5} className={classes.imgStar}>
							<StarRatingComponent
								className={classes.star}
								name={"waiter-rating"} 
								starColor={"#FFFFFF"}
								starCount={5}
								value={props.waiters[index].rating}
							/>		
						</Grid>													
					
					</Grid>	
					<Button className={classes.leaveTipButton} fullWidth='true' onClick={goToTip}>Leave Tip</Button>		
				</CardMedia>

				<Container className={classes.contBody}>
					<Typography className={classes.locationTitle}>Location</Typography>
					<Typography className={classes.location}>{props.waiters[index].location} - {props.waiters[index].lengthOfWork}</Typography>

					<Divider className={classes.divider} />

					<Typography className={classes.transTitle}>Transactions</Typography>
					<Grid container wrap='nowrap' spacing='5'>
						<Grid item xs={4}>	
							{props.waiters[index].transactions.map((trans, i) => <Grid key={trans.id} className={classes.date}>{trans.date}</Grid>)}				
						</Grid>

						<Grid item xs={4}>						
							<Grid className={classes.date}>{props.waiters[index].location}</Grid>					
							<Grid className={classes.date}>{props.waiters[index].location}</Grid>					
							<Grid className={classes.date}>{props.waiters[index].location}</Grid>										
						</Grid>

						<Grid item xs={3}>	
							{props.waiters[index].transactions.map((trans, i) => <Grid key={trans.id} className={classes.amount}>${trans.amount}</Grid>)}	
						</Grid>
					</Grid>

					<Divider className={classes.divider} />

					<Typography className={classes.transTitle}>Tagline</Typography>
					<Typography className={classes.tag}>"{props.waiters[index].tagline}"</Typography>				
				</Container>

			</Card>		
		</>
	)
}

const mapStateToProps = (state) => {
	console.log(state.waiterReducer.waiters)
	return {
		waiters: state.waiterReducer.waiters  
	}	
}

export default connect(mapStateToProps, {})(WaiterProfile);