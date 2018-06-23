import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from './MapContainer';
import AppBar from './AppBar';
import NavDrawer from './NavDrawer';
import { withStyles } from '@material-ui/core/styles';
import { mockPlaces } from '../utils/Contsants';

const styles = theme => ({
  root: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    maxWidth: '100vw',
    maxHeight: '100vh'
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
    filteredPlaces: [],
    selectedPlaceId: ''
  };

  componentDidMount() {
    this.storeAllPlaces(mockPlaces);
  }

  /**
   * Fetch all places from API
   */
  storeAllPlaces = places => {
    this.setState({ places });
    this.setState({ filteredPlaces: places });
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  /**
   * Seve selected place id into current state
   *
   * @param {Event} event - Event object received as the result of click
   */
  placeClick = event => {
    this.handleDrawerToggle();
    // Get classList of the event target
    const classList = event.currentTarget.classList;
    // Get last class of the target
    const selectedPlaceId = classList[classList.length - 1];
    // Set the value of selectedPlaceId
    this.setState({ selectedPlaceId });
  };

  /**
   * Filters places array based on the query
   *
   * @param {String} query - query string
   */
  queryUpdate = query => {
    let filteredPlaces;
    if (!query) {
      filteredPlaces = this.state.places;
    } else {
      filteredPlaces = this.state.places.filter(place =>
        place.title.toLowerCase().includes(query)
      );
    }
    this.setState({ filteredPlaces });
  };

  render() {
    const { classes } = this.props;
    const { mobileOpen, filteredPlaces, selectedPlaceId } = this.state;

    return (
      <div className={classes.root}>
        <AppBar handleDrawerToggle={this.handleDrawerToggle} />
        <main className={classes.content}>
          <NavDrawer
            mobileOpen={mobileOpen}
            handleDrawerToggle={this.handleDrawerToggle}
            places={filteredPlaces}
            placeClick={this.placeClick}
          />
          <MapContainer
            places={filteredPlaces}
            selectedPlaceId={selectedPlaceId}
            queryUpdate={this.queryUpdate}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainContainer);
