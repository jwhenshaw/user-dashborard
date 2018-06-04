// @flow
import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './MuiTheme';
import Dashboard from './components/Dashboard';

type Props = {};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Dashboard />
      </MuiThemeProvider>
    );
  }
}

export default App;
