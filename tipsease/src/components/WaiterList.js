import React, { Component } from 'react';
import { connect } from "react-redux";

import Waiter from "./Waiter"
import WaiterProfile from "./WaiterProfile"

class WaiterList extends Component {

	render() {

		return (

			<>

				{this.props.waiters.map((waiter, i) => {
					return (
						<Waiter 
						waiter={waiter} 
						key={i}
						/>
					)
				})}

				{/* <WaiterProfile waiters={this.props.waiters}/> */}
				
			</>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state.waiterReducer.waiters)
	return {
		waiters: state.waiterReducer.waiters  
	}	
}

export default connect(mapStateToProps, {})(WaiterList);
