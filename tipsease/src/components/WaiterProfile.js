import React from 'react';
import { Container, Card, CardMedia, Typography, Grid, Button, Divider, } from '@material-ui/core';
import { Grade, GradeOutlined, AddCircle, AddCircleOutline } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

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
		marginTop: '32px'
	}	
})

const WaiterProfile = (props) => {
	const classes = useStyles();
	console.log(props.waiters[0].name)

	return (
		<> 
			<Card>

				<CardMedia image={props.waiters[0].img}>
					<Grid container wrap='nowrap'> 
						
						<Grid item xs={8}>	
							<Container className={classes.imgText}>						
								<Typography variant='h5' className={classes.imgContentName}>{props.waiters[0].name}</Typography>
								<Typography variant='subtitle2' className={classes.imgContent}>{props.waiters[0].username}</Typography>
								<Typography variant='subtitle1' className={classes.imgContent}>{props.waiters[0].title}</Typography>					
							</Container>						
						</Grid>

						<Grid item xs={5} className={classes.imgStar}>
							{props.waiters[0].rating.map((value, i) => value === 1 ? <GradeOutlined className={classes.imgContent}/> : null)}	
						</Grid>													
					
					</Grid>	
					<Button className={classes.leaveTipButton} fullWidth='true'>Leave Tip</Button>		
				</CardMedia>

				<Container className={classes.contBody}>
					<Typography variant='h6' gutterBottom='true'>Location</Typography>
					<Typography>{props.waiters[0].location} - {props.waiters[0].lengthOfWork}</Typography>

					<Divider variant="middle" />

					<Typography variant='h6'>Transactions</Typography>
					<Grid container wrap='nowrap'>
						<Grid item xs={5}>	
							{props.waiters[0].transactions.map((trans, i) => <Grid>{trans.date}</Grid>)}				
						</Grid>

						<Grid item xs={4}>						
							<Grid>{props.waiters[0].location}</Grid>					
							<Grid>{props.waiters[0].location}</Grid>					
							<Grid>{props.waiters[0].location}</Grid>										
						</Grid>

						<Grid item xs={3}>	
							{props.waiters[0].transactions.map((trans, i) => <Grid>${trans.amount}</Grid>)}	
						</Grid>
					</Grid>

					<Typography variant='h6'>Tagline</Typography>
					<Typography>"{props.waiters[0].tagline}"</Typography>				
				</Container>

				


			</Card>		
		</>
	)
}

export default WaiterProfile;