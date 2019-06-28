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
		fontSize: '18px',
		fontWeight: '300',
		letterSpacing: '-0.38px',
		lineHeight: '21px',
		marginTop: '5px'
	},
	star: {
		fontSize: '22px'
	},
	a: {
		textDecoration: 'none'
	}
})

const WaiterNew = (props) => {
	console.log(props.server)
	const classes = useStyles();

	const goToTip = e => {
		e.stopPropagation()
		props.history.push(`/dashboard/tip/${props.server.id}`)
	}
	
	const gotoProfile = e => {
		console.log("works")
		props.history.push(`/dashboard/waiter/${props.server.id}`)
	}

	return (
		
		<Card className={classes.root} onClick={gotoProfile}>		
			<Grid container wrap='nowrap' spacing={1}>

				<Grid item xs={4}>
					<CardMedia className={classes.img} image={props.server.thumbnail_url} component='img' />
				</Grid>

				<Grid item xs={5}>					
					<Typography className={classes.name}>{props.server.name}</Typography>
					<Typography className={classes.title}>Bartender</Typography>
					<StarRatingComponent
						className={classes.star}
						name={"waiter-rating"} 
						starColor={"#FFE624"}
						starCount={5}
						value={props.server.rating}
					/>
				</Grid>

				<Grid item xs className={classes.fabGrid}>

						<Fab 
							onClick={goToTip}
							value={props.server.id} 
							color='primary' 
							size='small' 
							variant="extended" 
							aria-label="Add" 
							className={classes.fab}
						>
							<AddCircle/>
							Tip
						</Fab>
					
				</Grid>

			</Grid>
		</Card>
		
	)
}

export default WaiterNew;