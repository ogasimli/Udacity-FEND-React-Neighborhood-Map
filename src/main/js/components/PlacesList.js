import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CastleIcon from './icons/CastleIcon';
import MuseumIcon from './icons/MuseumIcon';
import ParkIcon from './icons/ParkIcon';
import PhilarmoniaIcon from './icons/PhilarmoniaIcon';
import StadiumIcon from './icons/StadiumIcon';
import DefaultIcon from './icons/DefaultIcon';
import { categories } from '../utils/Contsants';
import * as Utils from '../utils/Utils';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class PlacesList extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    places: PropTypes.array.isRequired,
    placeClick: PropTypes.func.isRequired
  };

  state = {
    monumentOpen: true,
    parkOpen: true,
    museumOpen: true,
    musicHallOpen: true,
    sportsHallOpen: true
  };

  handleClick = event => {
    // Get classList of the event target
    const classList = event.currentTarget.classList;
    // Get last class of the target
    const categoryId = classList[classList.length - 1];
    // Determine the key of the state object's field
    const expansionKey = this.getExpansionStateKey(categoryId);
    // Determine the current value of the state object's field
    const expansionState = this.getExpansionState(categoryId);
    // Change the value of corresponding field
    this.setState({ [expansionKey]: !expansionState });
  };

  /**
   * Returns appropriate icon component based on the category
   *
   * @param {object} - id of the category object
   * @returns {JSX} - icon component of the category
   */
  getListIcon = categoryId => {
    switch (categoryId) {
      case 'historic_monument':
        return <CastleIcon />;
      case 'park':
        return <ParkIcon />;
      case 'museum':
        return <MuseumIcon />;
      case 'music_hall':
        return <PhilarmoniaIcon />;
      case 'sports_hall':
        return <StadiumIcon />;
      default:
        return <DefaultIcon />;
    }
  };

  /**
   * Returns expansion state of category ListItem
   *
   * @param {object} - id of the category object
   * @returns {boolean} - expansion state of category ListItem
   */
  getExpansionState = categoryId => {
    switch (categoryId) {
      case 'historic_monument':
        return this.state.monumentOpen;
      case 'park':
        return this.state.parkOpen;
      case 'museum':
        return this.state.museumOpen;
      case 'music_hall':
        return this.state.musicHallOpen;
      case 'sports_hall':
        return this.state.sportsHallOpen;
      default:
        return this.state.monumentOpen;
    }
  };

  /**
   * Returns the key of the appropriate field
   * from state object based on the category id
   *
   * @param {object} - id of the category object
   * @returns {boolean} - key of the field
   */
  getExpansionStateKey = categoryId => {
    switch (categoryId) {
      case 'historic_monument':
        return 'monumentOpen';
      case 'park':
        return 'parkOpen';
      case 'museum':
        return 'museumOpen';
      case 'music_hall':
        return 'musicHallOpen';
      case 'sports_hall':
        return 'sportsHallOpen';
      default:
        return 'monumentOpen';
    }
  };

  render() {
    const { classes, places, placeClick } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          {categories.map(category => (
            <div key={category.id}>
              <Divider />
              <ListItem
                button
                className={category.id}
                onClick={this.handleClick}
              >
                <ListItemIcon>{this.getListIcon(category.id)}</ListItemIcon>
                <ListItemText inset primary={category.title} />
                {this.getExpansionState(category.id) ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItem>
              {Utils.getPlacesByCategory(places, category.id).map(place => (
                <Collapse
                  key={place.id}
                  in={this.getExpansionState(category.id)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className={classes.nested}
                      className={place.id}
                      onClick={placeClick}
                    >
                      <ListItemText
                        primary={place.title}
                        secondary={place.address}
                      />
                    </ListItem>
                  </List>
                </Collapse>
              ))}
            </div>
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(PlacesList);
