import React from 'react';

import { Route } from 'react-router-dom'
import PrivateRoute from "../Routes/PrivateRoute"

import SignUp from "../login/SignUp"
import Login from "../login/Login"
import Dashboard from "../components/Dashboard"
import TipPage from "../components/TipPage"
import PaymentComplete from "../components/PaymentComplete"
import WaiterProfile from "../components/WaiterProfile"
import UserProfile from "../components/UserProfile"

const SetRoutes = (props) => {	

	return (
		<div>

			<Route exact path="/" render={props => (<Login {...props}/>)} />
			<Route path="/signup" render={props => (<SignUp {...props}/>)} />

			<PrivateRoute exact path={`/dashboard`} component={Dashboard} />	
			<PrivateRoute exact path="/dashboard/tip/:id" component={TipPage} />
			<PrivateRoute path="/dashboard/tip/:id/pay/:id" component={PaymentComplete} />
			<PrivateRoute path="/dashboard/waiter/:id" component={WaiterProfile} />
			<PrivateRoute path="/dashboard/user/:id" component={UserProfile} />



			{/* <Dashboard /> */}

		</div>
	)
};

export default SetRoutes;