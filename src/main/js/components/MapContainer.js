import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchInput from './SearchInput';
import MapError from './MapError';
import * as Utils from '../utils/Utils';
import * as PlacesAPI from '../utils/ForesquareAPI';
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
    venueInfos: [],
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: {},
    searchInputVisible: false,
    authError: false,
    mapErrorVisible: false
  };

  componentWillReceiveProps(nextProps) {
    // Get new props
    const { places, selectedPlaceId } = nextProps;
    // Check if new selectedPlaceId is received
    if (selectedPlaceId !== this.props.selectedPlaceId) {
      // Find corresponding marker
      const marker = this.state.markers.find(
        marker => marker.id === selectedPlaceId
      );
      // Show InfoWindow on this marker
      if (marker) {
        this.showInfoWindow(selectedPlaceId, marker);
      }
    }
    // Check if new places array is received
    if (places !== this.props.places) {
      this.fetchVenueInfo(places);
      // Iterate over existing markers
      this.state.markers.forEach(marker => {
        const markerExists = places.find(place => place.id === marker.id);
        // Display markers of places that are present in new places array
        if (markerExists) {
          marker.setMap(this.state.map);
        } else {
          // Hide markers of places that aren't present in new places array
          marker.setMap(null);
        }
      });
    }
  }

  componentDidMount() {
    // Set global initMap function
    window.initMap = this.initMap;
    // Set global gm_authFailure function
    window.gm_authFailure = this.loadError;
    // Get body tag
    const bodyTag = document.querySelector('body');
    // Build Google Maps script tag
    const mapsTag = document.createElement('script');
    mapsTag.src = MAPS_URL();
    mapsTag.onerror = this.loadError;
    mapsTag.async = true;
    mapsTag.defer = true;
    // Append Google Maps script tag to the end of the page body
    bodyTag.appendChild(mapsTag);
  }

  /**
   * Initialize map
   */
  initMap = () => {
    const mapTag = document.querySelector('#map');
    if (mapTag) {
      const map = new window.google.maps.Map(mapTag, {
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
    }
  };

  /**
   * Displays MapError component when error occurs
   * while loading the Google Maps
   *
   * @param {Object} error - error object occured while loading
   */
  loadError = error => {
    // Store map error
    if (error) this.setState({ authError: true });
    // Store visibility status of map error
    this.setState({ mapErrorVisible: true });
  };

  /**
   * Fetches venue info and stores it to component state
   *
   * @param {array} places - places array that contains all places
   */
  fetchVenueInfo = places => {
    // Get current array of venue information
    const venueInfos = this.state.venueInfos;
    places.forEach(place => {
      // Check if there is already info about the place
      if (!venueInfos.find(info => info.id === place.id)) {
        // If not then fetch info from API
        PlacesAPI.getVenueInfo(place.id).then(info => {
          if (info) {
            const venueInfo = {
              id: place.id,
              info: info
            };
            // Update component state by adding the new venue info
            this.setState(prevState => ({
              venueInfos: [...prevState.venueInfos, venueInfo]
            }));
          }
        });
      }
    });
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
   * @param {String} placeId - id of the place which should be shown
   * @param {Marker} marker - marker that received click event
   */
  showInfoWindow = (placeId, marker) => {
    const locationData = {};
    const venueInfo = this.state.venueInfos.find(info => info.id === placeId);
    if (venueInfo) {
      const info = venueInfo.info;
      locationData.title = info.name ? info.name : marker.title;
      locationData.phone =
        info.contact && info.contact.formattedPhone
          ? info.contact.formattedPhone
          : 'N/A';
      locationData.address = info.location.formattedAddress
        ? info.location.formattedAddress.join(' ')
        : 'N/A';
      locationData.website = info.url
        ? `<a href=${info.url} target="_blank">${info.url}</a>`
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
   * @param {Marker} marker - marker object that should be animated
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
    return this.state.mapErrorVisible ? (
      <MapError authError={this.state.authError} />
    ) : (
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
