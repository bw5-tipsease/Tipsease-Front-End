import React from 'react';
import './styles/App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

import Dashboard from "./components/Dashboard"
import SignUp from "./login/SignUp"
import SetRoutes from './Routes/SetRoutes';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* <Dashboard /> */}
      
      <SetRoutes />
    </div>
  );
}

export default App;
