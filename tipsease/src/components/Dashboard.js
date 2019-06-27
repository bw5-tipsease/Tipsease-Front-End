import React from 'react';
import { Typography, InputBase, Paper, IconButton  }   from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';


import WaiterInfoContainer from "./WaiterInfoContainer"
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

const Dashboard = (props) => {
	console.log(props)	
	const classes = useStyles();	

		return (

			<>
				<TopBar {...props}/>
				<SearchBar />

				{/* <Typography className={classes.title}>Service Worker</Typography>			 */}

				<WaiterInfoContainer {...props}/>

				{/* <Typography className={classes.title}>Transactions</Typography>						 */}

				{/* <BoottomBar /> */}

			</>
		);
	
}

export default Dashboard;



