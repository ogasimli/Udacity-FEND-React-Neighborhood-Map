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
  primary: {
    fontWeight: 'bold'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class PlacesList extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    places: PropTypes.array.isRequired
  };

  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  getListIcon = category => {
    switch (category.id) {
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

  render() {
    const { classes, places } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          {categories.map(category => (
            <div key={category.id}>
              <Divider />
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>{this.getListIcon(category)}</ListItemIcon>
                <ListItemText
                  inset
                  styles={{ 'font-weight': 'bold' }}
                  primary={category.title}
                />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {Utils.getPlacesByCategory(places, category.id).map(place => (
                <Collapse
                  key={place.id}
                  in={this.state.open}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
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
