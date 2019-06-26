import React from 'react';
import { Container,Card, CardMedia, CardContent, Typography, Fab, Grid } from '@material-ui/core';
import { Grade, GradeOutlined, AddCircle, AddCircleOutline } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';


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
    	width: '90px',
    	margin: '0 auto'
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
					<Typography className={classes.name}>{props.waiter.name}</Typography>
					<Typography className={classes.title}>{props.waiter.title}</Typography>
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