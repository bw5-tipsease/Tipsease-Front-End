import React from 'react';
import './styles/App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

import Dashboard from "./components/Dashboard"
import SignUp from "./login/SignUp"

function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* <Dashboard /> */}
      <SignUp />

    </div>
  );
}

export default App;
