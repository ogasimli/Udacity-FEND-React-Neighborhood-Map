import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import * as Utils from '../utils/Utils';
import PropTypes from 'prop-types';

class MapContainer extends Component {
  static propTypes = {
    google: PropTypes.object.isRequired,
    places: PropTypes.array.isRequired
  };

  state = {
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: {}
  };

  componentDidMount() {}

  onMarkerClick = (props, marker) => {
    console.log(this.state.activeMarker);
    if (this.state.activeMarker) {
      this.state.activeMarker.setAnimation(null);
    }
    this.setState({
      selectedPlace: {
        title: props.title,
        position: props.position
      },
      activeMarker: marker,
      showingInfoWindow: true
    });
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(this.props.google.maps.Animation.BOUNCE);
    }
  };

  onInfoWindowClose = () => {
    this.state.activeMarker.setAnimation(null);
    this.setState({
      selectedPlace: {},
      activeMarker: null,
      showingInfoWindow: false
    });
  };

  render() {
    const { google, places } = this.props;
    const bounds = new google.maps.LatLngBounds();
    places.forEach(place => bounds.extend(place.latlng));

    return (
      <Map
        role="application"
        tabIndex="-1"
        google={google}
        initialCenter={{
          lat: 40.429839,
          lng: 49.831505
        }}
        zoom={12}
        bounds={bounds}
      >
        {places.map((place, index) => (
          <Marker
            key={index}
            onClick={this.onMarkerClick}
            title={place.title}
            position={place.latlng}
            icon={Utils.getMarkerIcon(place)}
            animation={google.maps.Animation.DROP}
          />
        ))}

        <InfoWindow
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.title}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyClMXgQ7Uzz-YA_dcFr8wGaDZ-2E9mQ8wA'
})(MapContainer);
