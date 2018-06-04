// @flow
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import mockUsersData from '../../mocks/users';

import SearchBar from '../SearchBar';
import UserTabs from '../UserTabs';

const styles = theme => {
  return {
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.primary.dark,
    },
    title: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    searchBar: {},
  };
};

type Props = {
  classes: Object,
};

type State = {};

class Dashboard extends React.Component<Props, State> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
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
        <UserTabs users={mockUsersData} />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
