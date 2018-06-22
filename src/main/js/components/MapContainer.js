import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchInput from './SearchInput';
import * as Utils from '../utils/Utils';
import {
  MAPS_URL,
  MAPS_DEFAULT_CENTER,
  MAPS_DEFAULT_ZOOM,
  MAPS_CUSTOM_STYLE
} from '../utils/Contsants';
import PropTypes from 'prop-types';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class MapContainer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    places: PropTypes.array.isRequired,
    selectedPlaceId: PropTypes.string,
    queryUpdate: PropTypes.func.isRequired
  };

  state = {
    map: {},
    markers: [],
    infoWindow: {},
    placeInfo: [],
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: {},
    searchInputVisible: false
  };

  componentWillReceiveProps(nextProps) {
    const placeId = nextProps.selectedPlaceId;
    if (placeId) {
      const marker = this.state.markers.find(marker => marker.id === placeId);
      if (marker) {
        this.showInfoWindow(placeId, marker);
      }
    }
  }

  componentWillMount() {
    // Get body tag
    const bodyTag = document.querySelector('body');
    // Build Google Maps script tag
    const mapsTag = document.createElement('script');
    mapsTag.src = MAPS_URL();
    mapsTag.async = true;
    mapsTag.defer = true;
    // Append Google Maps script tag to the end of the page body
    bodyTag.appendChild(mapsTag);
  }

  componentDidMount() {
    window.initMap = this.initMap;
  }

  /**
   * Initialize map
   */
  initMap = () => {
    const map = new window.google.maps.Map(document.querySelector('#map'), {
      center: MAPS_DEFAULT_CENTER,
      zoom: MAPS_DEFAULT_ZOOM,
      styles: MAPS_CUSTOM_STYLE,
      mapTypeControl: false
    });
    // Show markers
    this.setMarkers(map, this.props.places);
    // Show search field
    this.showSearchInput();
    // Setup new InfoWindow
    this.setInfoWindow();
    // Save map
    this.setState({ map: map });
  };

  /**
   * Displays search input field
   */
  showSearchInput = () => this.setState({ searchInputVisible: true });

  /**
   * Setups and shows markers on the map
   *
   * @param {Map} map - Google Map objecct
   * @param {array} places - list of places
   */
  setMarkers(map, places) {
    let markers = [];
    let bounds = new window.google.maps.LatLngBounds();

    places.forEach(place => {
      let marker = new window.google.maps.Marker({
        id: place.id,
        title: place.title,
        position: place.latlng,
        icon: Utils.getMarkerIcon(place),
        map: map,
        animation: window.google.maps.Animation.DROP
      });
      marker.addListener('click', () => {
        // Show an InfoWindow with the requested data.
        this.showInfoWindow(place.id, marker);
      });
      bounds.extend(marker.position);
      markers.push(marker);
    });
    // Extend bounds of the map
    map.fitBounds(bounds);
    this.setState({ markers });
  }

  /**
   * Creates empty InfoWindow and saves it for future use
   */
  setInfoWindow = () =>
    this.setState({ infoWindow: new window.google.maps.InfoWindow() });

  /**
   * Sets content of the InfoWindow and displays it
   *
   * @param {String} - id of the place which should be shown
   * @param {Marker} - marker that received click event
   */
  showInfoWindow = (placeId, marker) => {
    const locationData = {};
    const placeInfo = this.state.placeInfo[placeId];
    if (placeInfo !== undefined) {
      locationData.title = placeInfo.name ? placeInfo.name : marker.title;
      locationData.phone = placeInfo.contact.formattedPhone
        ? placeInfo.contact.formattedPhone
        : 'N/A';
      locationData.address = placeInfo.location.formattedAddress
        ? placeInfo.location.formattedAddress.join(' ')
        : 'N/A';
      locationData.website = placeInfo.url
        ? `<a href=${placeInfo.url} target="_blank">${placeInfo.url}</a>`
        : 'N/A';
    } else {
      const place = this.props.places.find(place => place.id === placeId);
      locationData.title = place.title ? place.title : marker.title;
      locationData.phone = 'N/A';
      locationData.address = place.address ? place.address : 'N/A';
      locationData.website = 'N/A';
    }
    const contentString = `<div tabindex="0">
    <h3 role="heading">${locationData.title}</h3>
    <p><span class="info-label">Phone:</span> ${locationData.phone}</p>
    <p><span class="info-label">Address:</span> ${locationData.address}</p>
    <p><span class="info-label">Website:</span> ${locationData.website}<p>
    <p><a href="https://foursquare.com/v/${
      marker.id
    }/" target="_blank">More Info on FourSquare</a></p>
    <p class="api-info">Venue data provided by FourSquare API</p>
    </div>`;
    const infoWindow = this.state.infoWindow;
    infoWindow.setContent(contentString);
    infoWindow.open(this.state.map, marker);
    this.animateMarker(marker);
  };

  /**
   * Animates selected marker
   *
   * @param {Marker} - marker object that should be animated
   */
  animateMarker = marker => {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(window.google.maps.Animation.BOUNCE);
      marker.setAnimation(null);
    }
  };

  render() {
    const { classes, queryUpdate } = this.props;
    return (
      <div className="map-container">
        {this.state.searchInputVisible && (
          <SearchInput queryUpdate={queryUpdate} />
        )}
        <div id="map" role="application" tabIndex="-1">
          <CircularProgress className={classes.progress} size={50} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MapContainer);
