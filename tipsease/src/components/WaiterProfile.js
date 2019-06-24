import React from 'react';
import { Container, Card, CardMedia} from '@material-ui/core';


const WaiterProfile = (props) => {
	console.log(props.waiters[0].name)

	return (
		<> 
			<Card>
				<CardMedia src={props.waiters[0].img} alt={props.waiters[0].name} component='img' />
			
			</Card>		
		</>
	)
}

export default WaiterProfile;