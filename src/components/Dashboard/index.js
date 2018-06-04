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

type State = {
  users: Object,
};

class Dashboard extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      users: mockUsersData,
    };
  }

  handleRemoveUser = idToRemove => {
    const users = Object.keys(this.state.users).reduce((acc, userId) => {
      if (userId !== idToRemove)
        return { ...acc, [userId]: this.state.users[userId] };
      return acc;
    }, {});
    this.setState({ users });
  };

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
        <UserTabs
          users={this.state.users}
          onRemoveUser={this.handleRemoveUser}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
