// @flow
import React from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
  const bottomLineColor = theme.palette.secondary.main;

  return {
    root: {},
    textField: {
      width: 300,
    },
    inputColor: {
      color: theme.palette.secondary.main,
      '&$inputColorFocused': {
        color: theme.palette.secondary.main,
      },
    },
    inputColorFocused: {},
    inputUnderline: {
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
      <FormControl className={classes.textField}>
        <InputLabel
          FormLabelClasses={{
            root: classes.inputColor,
            focused: classes.inputColorFocused,
          }}
          htmlFor="search-input-label"
        >
          Search
        </InputLabel>
        <Input
          classes={{
            root: classes.inputColor,
            underline: classes.inputUnderline,
          }}
          id="search-input"
        />
      </FormControl>
    );
  }
}

export default withStyles(styles)(SearchBar);

/*<form className={classes.root} noValidate autoComplete="off">
  <TextField
    id="searchText"
    label="Search"
    className={classes.textField}
    value={this.state.name}
    onChange={this.handleChange('searchText')}
    InputProps={{
      classes: {
        input: classes.inputColor,
        underline: classes.textInputUnderline,
      },
    }}
    InputLabelProps={{
      classes: {
        root: classes.inputColor,
      },
    }}
  />
  </form> */
