import React from 'react';
import { Typography, InputBase, Paper, IconButton  }   from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';


import WaiterList from "./WaiterList"
import TopBar from "./TopBar"
import SearchBar from "./SearchBar"
import WaiterProfile from "./WaiterProfile"
import BoottomBar from "./BottomBar"
import TipPage from "./TipPage"

const useStyles = makeStyles({

	title: {
		fontFamily: 'Roboto',
		fontSize: '36px',
		fontWeight: 'bold',
		letterSpacing: '-0.45px',
		lineHeight: '42px',
		marginLeft: '52px'
	}

  });

const Dashboard = () => {	
	const classes = useStyles();	

		return (

			<>
				<TopBar />

				<SearchBar />

				<Typography 
				className={classes.title}
				>
					Service Worker
				</Typography>			

				<WaiterList />

				{/* <TipPage /> */}

				<BoottomBar />

			</>
		);
	
}

export default Dashboard;



