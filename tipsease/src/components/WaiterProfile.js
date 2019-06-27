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
		paddingLeft: '0px'
	},
	imgStar: {
		// marginTop: '15px'
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
		fontSize: '22px'
	},	
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
								starColor={"#FFE624"}
								starCount={5}
								value={props.waiters[index].rating}
							/>		
						</Grid>													
					
					</Grid>	
					<Button className={classes.leaveTipButton} fullWidth='true' onClick={goToTip}>Leave Tip</Button>		
				</CardMedia>

				<Container className={classes.contBody}>
					<Typography variant='h6' gutterBottom='true'>Location</Typography>
					<Typography>{props.waiters[index].location} - {props.waiters[index].lengthOfWork}</Typography>

					<Divider variant="middle" />

					<Typography variant='h6'>Transactions</Typography>
					<Grid container wrap='nowrap'>
						<Grid item xs={5}>	
							{props.waiters[index].transactions.map((trans, i) => <Grid>{trans.date}</Grid>)}				
						</Grid>

						<Grid item xs={4}>						
							<Grid>{props.waiters[index].location}</Grid>					
							<Grid>{props.waiters[index].location}</Grid>					
							<Grid>{props.waiters[index].location}</Grid>										
						</Grid>

						<Grid item xs={3}>	
							{props.waiters[index].transactions.map((trans, i) => <Grid>${trans.amount}</Grid>)}	
						</Grid>
					</Grid>

					<Typography variant='h6'>Tagline</Typography>
					<Typography>"{props.waiters[index].tagline}"</Typography>				
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