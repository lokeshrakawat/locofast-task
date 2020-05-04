import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';

import { DispatchDetails } from './containers';
import theme from './theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <DispatchDetails />
      </ThemeProvider>
    </div>
  );
}

export default App;
