import React from 'react';
import { AppBar, Toolbar, Typography, Fab, IconButton}   from '@material-ui/core/';
import { AddIcon, AddCircle, HomeTwoTone, SearchOutlined, } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

	appBar: {
		top: 'auto',
		bottom: 0,
		background: 'linear-gradient(136.07deg, #6CD6FA 0%, #3A7AF2 100%)',
		height: '76px',
		borderTopLeftRadius: '20px',
    	borderTopRightRadius: '20px'
	  },
	  grow: {
		flexGrow: 1,
	  },
	  fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto',
	  },

  });


const BottomBar = (props) => {
	const classes = useStyles();

	return (

		<AppBar position="fixed" color="primary" className={classes.appBar}>
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="Open drawer">
					<HomeTwoTone />	
				</IconButton>
				<Fab color="secondary" aria-label="Add" className={classes.fabButton}>
					<AddCircle />
				</Fab>
				<div className={classes.grow} />
				<IconButton color="inherit">
					
				</IconButton>
				<IconButton edge="end" color="inherit">
					<SearchOutlined />
				</IconButton>
			</Toolbar>
      </AppBar>

	)
}

export default BottomBar;