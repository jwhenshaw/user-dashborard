// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core';

const styles = theme => {
  const summaryStyles = {
    backgroundColor: theme.palette.primary.light,
    color: '#fff',
  };

  return {
    root: {},
    overviewSummary: {
      ...summaryStyles,
    },
    overviewDetails: {},
    filesSummary: {
      ...summaryStyles,
    },
    filesDetails: {},
  };
};

type Props = {
  classes: Object,
  user: {
    userId: string,
    username: string,
  },
};

class UserExpansionPanels extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            className={classes.overviewSummary}
            expandIcon={<ExpandMoreIcon />}
          >
            Overview
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>{this.props.user.username}</div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            className={classes.filesSummary}
            expandIcon={<ExpandMoreIcon />}
          >
            Files
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(UserExpansionPanels);
