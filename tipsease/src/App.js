import React from 'react';
import './styles/App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Dashboard />

    </div>
  );
}

export default App;
