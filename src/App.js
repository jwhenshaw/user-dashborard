// @flow
import React from 'react';

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import theme from './MuiTheme';

const styles = {
  root: {
    flexGrow: 1,
  },
};

type Props = {
  classes: Object,
};

class App extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Project Unicorn
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
