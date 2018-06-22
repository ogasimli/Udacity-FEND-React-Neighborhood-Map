import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from './PlacesList';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  drawerPaper: {
    width: 280,
    [theme.breakpoints.up('md')]: {
      width: 320,
      position: 'relative',
      height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 8px)`,
      zIndex: 1
    }
  }
});

function NavDrawer(props) {
  const {
    classes,
    theme,
    mobileOpen,
    handleDrawerToggle,
    places,
    placeClick
  } = props;

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <PlacesList places={places} placeClick={placeClick} />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <PlacesList places={places} placeClick={placeClick} />
        </Drawer>
      </Hidden>
    </div>
  );
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  places: PropTypes.array.isRequired,
  placeClick: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(NavDrawer);
