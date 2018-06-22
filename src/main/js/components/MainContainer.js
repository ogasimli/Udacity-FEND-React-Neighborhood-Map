import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from './MapContainer';
import AppBar from './AppBar';
import PlacesList from './PlacesList';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import * as PlacesAPI from '../utils/PlacesAPI';

const styles = theme => ({
  root: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    maxWidth: '100vw',
    maxHeight: '100vh'
  },
  appBar: {
    position: 'inherit'
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerPaper: {
    width: 280,
    [theme.breakpoints.up('md')]: {
      width: 320,
      position: 'relative',
      height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 8px)`,
      zIndex: 1
    }
  },
  content: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 8px)`,
    [theme.breakpoints.down('xs')]: {
      height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`
    }
  }
});

class MainContainer extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
  };

  state = {
    mobileOpen: false,
    places: [],
    selectedPlaceId: ''
  };

  componentDidMount() {
    this.getAllPlaces();
  }

  /**
   * Fetch all places from API
   */
  getAllPlaces = () =>
    PlacesAPI.getAll().then(places => this.setState({ places }));

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  /**
   * Seve selected place id into current state
   *
   * @param {event} - Event object received as the result of click
   */
  placeClick = event => {
    // Get classList of the event target
    const classList = event.currentTarget.classList;
    // Get last class of the target
    const selectedPlaceId = classList[classList.length - 1];
    // Set the value of selectedPlaceId
    this.setState({ selectedPlaceId });
  };

  render() {
    const { classes, theme } = this.props;
    const places = this.state.places;

    return (
      <div className={classes.root}>
        <AppBar handleDrawerToggle={this.handleDrawerToggle} />
        <main className={classes.content}>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <PlacesList places={places} placeClick={this.placeClick} />
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
              <PlacesList places={places} placeClick={this.placeClick} />
            </Drawer>
          </Hidden>
          <div className="map-container">
            <MapContainer
              places={places}
              selectedPlaceId={this.state.selectedPlaceId}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainContainer);
