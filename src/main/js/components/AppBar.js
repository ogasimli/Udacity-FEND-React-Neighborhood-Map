import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'inherit'
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

function MyAppBar(props) {
  const { classes, handleDrawerToggle } = props;

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          className={classes.navIconHide}
          onClick={handleDrawerToggle}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography id="app-title" variant="title" color="inherit" noWrap>
          Neighborhood Map
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(MyAppBar);
