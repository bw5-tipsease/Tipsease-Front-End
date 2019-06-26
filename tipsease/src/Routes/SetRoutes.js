import React from 'react';

import { Route } from 'react-router-dom'

import SignUp from "../login/SignUp"
import Login from "../login/Login"

const SetRoutes = (props) => {	

	return (
		<div>

			<Route exact path="/" render={props => (<SignUp {...props}/>)} />
			<Route path="/login" render={props => (<Login {...props}/>)} />

			{/* <PrivateRoute exact path="/" component={} />	

			<PrivateRoute exact path="/" component={} />	 */}

		</div>
	)
};

export default SetRoutes;