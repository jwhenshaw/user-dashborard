// @flow
import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';

import UserExpansionPanels from '../UserExpansionPanels';

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

const styles = theme => {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  };
};

type Props = {
  users: Object,
};

type State = {
  userIds: string[],
};

class UserTabs extends React.Component<Props, State> {
  state = {
    value: 0,
    userIds: [],
  };

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      userIds: Object.keys(props.users),
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleCloseTab = tabUserId => () => {
    const { onRemoveUser } = this.props;
    onRemoveUser(tabUserId);
  };

  render() {
    const { classes, users } = this.props;
    const { value, userIds } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            scrollable
            scrollButtons="auto"
          >
            {userIds.map(userId => (
              <Tab
                key={userId}
                label={users[userId].username}
                icon={<CancelIcon onClick={this.handleCloseTab(userId)} />}
              />
            ))}
          </Tabs>
        </AppBar>
        {userIds.map(
          (userId, indx) =>
            value === indx && (
              <TabContainer key={userId}>
                <UserExpansionPanels user={users[userId]} />
              </TabContainer>
            ),
        )}
      </div>
    );
  }
}

export default withStyles(styles)(UserTabs);
