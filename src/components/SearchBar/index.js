// @flow
import React from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
  const bottomLineColor = theme.palette.secondary.main;

  return {
    root: {},
    textField: {
      width: 300,
    },
    textInputColor: {
      color: theme.palette.secondary.main,
      '&&focused': {
        color: theme.palette.secondary.main,
      },
    },
    textInputUnderline: {
      '&:after': {
        borderBottomColor: bottomLineColor,
      },
      '&:before': {
        borderBottomColor: bottomLineColor,
      },
    },
  };
};

class SearchBar extends React.Component<Props, State> {
  state = {
    searchText: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="searchText"
          label="Search"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('searchText')}
          InputProps={{
            classes: {
              input: classes.textInputColor,
              underline: classes.textInputUnderline,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.textInputColor,
            },
          }}
        />
      </form>
    );
  }
}

export default withStyles(styles)(SearchBar);
