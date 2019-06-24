import React from 'react';
import { Container, Card, CardMedia, Typography, Grid, } from '@material-ui/core';
import { Grade, GradeOutlined, AddCircle, AddCircleOutline } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
	root: {
		margin: '10px 15px'
	},
	imgContent: {
		color: 'white'
	},
	imgText: {
		marginTop: '50px'
	},
	imgStar: {
		// marginTop: '15px'
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
								<Typography variant='h5' className={classes.imgContent}>{props.waiters[0].name}</Typography>
								<Typography variant='subtitle2' className={classes.imgContent}>{props.waiters[0].username}</Typography>
								<Typography variant='subtitle1' className={classes.imgContent}>{props.waiters[0].title}</Typography>					
							</Container>						
						</Grid>

						<Grid item xs={5} className={classes.imgStar}>
							{props.waiters[0].rating.map((value, i) => value === 1 ? <GradeOutlined className={classes.imgContent}/> : null)}	
						</Grid>							
					
					</Grid>			
				</CardMedia>
			</Card>		
		</>
	)
}

export default WaiterProfile;