// @flow
import React from 'react';

import { Search as SearchIcon } from '@material-ui/icons';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';

import theme from './MuiTheme';
import SearchBar from './components/SearchBar';
import { POINT_CONVERSION_HYBRID } from 'constants';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  searchBar: {},
});

type Props = {
  classes: Object,
};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="title"
                color="inherit"
                className={classes.title}
              >
                Project Unicorn
              </Typography>
              <div className={classes.searchBar}>
                <SearchBar onClose={this.hideSearchBar} />
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
