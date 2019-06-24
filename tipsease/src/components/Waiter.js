import React from 'react';
import { Container,Card, CardMedia, CardContent, Typography, Fab, Grid } from '@material-ui/core';
import { Grade, GradeOutlined, AddCircle, AddCircleOutline } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
	root: {
		margin: '10px 15px'
	},
	fabGrid: {
		color: 'red',
		marginTop: '50px'
	},
	fab: {
		backgroundColor: '#1f9fff'
	},
	img: {
		padding: '5px'
	}
})

const Waiter = (props) => {
	console.log(props.waiter.rating)
	const classes = useStyles();

	return (		

		<Card className={classes.root}>
			<Grid container wrap='nowrap' spacing={1}>

				<Grid item xs={4}>
					<CardMedia className={classes.img} image={props.waiter.thumb} component='img' />
				</Grid>

				<Grid item xs={5}>					
					<Typography variant='h6'>{props.waiter.name}</Typography>
					<Typography variant='subtitle1'>{props.waiter.title}</Typography>
					{props.waiter.rating.map((value, i) => value === 1 ? <GradeOutlined /> : null)}							
				</Grid>

				<Grid item xs className={classes.fabGrid}>
					<Fab color='primary' size='small' variant="extended" aria-label="Add" className={classes.fab}>
						<AddCircle/>
						Tip
					</Fab>
				</Grid>

			</Grid>
		</Card>
		
	)
}

export default Waiter;