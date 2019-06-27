import React from 'react';
import { Container,Card, CardMedia, CardContent, Typography, Fab, Grid, } from '@material-ui/core';
import { Grade, GradeOutlined, AddCircle, AddCircleOutline } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
	root: {
		margin: '8px auto',
    	width: '330px',
    	height: '93px'
	},
	fabGrid: {
		color: 'red',
		marginTop: '50px'
	},
	fab: {
		backgroundColor: '#339EF9'
	},
	img: {
		borderRadius: '100%',
    	width: '79px',
    	margin: '5px auto'
	},
	name: {
		fontSize: '24px',
    	letterSpacing: '-0.45px',
		lineHeight: '28px',
		marginTop: '7px',
	},
	title: {
		fontSize: '15px',
		fontWeight: '300',
		lineHeight: '24px',
		letterSpacing: '-0.38px',
		fontFamily: "Open Sans",
		width: '181px'
	},
	star: {
		fontSize: '22px'
	},
	a: {
		textDecoration: 'none'
	}
})

const Waiter = (props) => {
	console.log(props.waiter.rating)
	const classes = useStyles();

	// const goToTip = e => {
	// 	console.log(props)
	// 	console.log("works")
	// 	props.history.push(`/dashboard/tip/${props.waiter.id}`)
	// }

	return (
		
		<Card className={classes.root}>		
			<Grid container wrap='nowrap' spacing={1}>

				<Grid item xs={4}>
					<CardMedia className={classes.img} image={props.waiter.locationThumb} component='img' />
				</Grid>

				<Grid item xs={5}>					
					<Typography className={classes.name}>{props.waiter.location}</Typography>
					<Typography className={classes.title}>{props.waiter.addressStreet}</Typography>
					<Typography className={classes.title}>{props.waiter.addressCityZip}</Typography>
					{/* <StarRatingComponent
						className={classes.star}
						name={"waiter-rating"} 
						starColor={"#FFE624"}
						starCount={5}
						value={props.waiter.rating}
					/> */}
				</Grid>

				{/* <Grid item xs className={classes.fabGrid}>

					<Fab 
						onClick={goToTip}
						value={props.waiter.id} 
						color='primary' 
						size='small' 
						variant="extended" 
						aria-label="Add" 
						className={classes.fab}
					>
						<AddCircle/>
						Tip
					</Fab>
				
				</Grid> */}

			</Grid>
		</Card>
		
	)
}

export default Waiter;