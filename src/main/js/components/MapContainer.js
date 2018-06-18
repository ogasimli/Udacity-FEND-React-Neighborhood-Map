import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';

class MapContainer extends Component {
  static propTypes = {
    google: PropTypes.object.isRequired
  };

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    places: [
      {
        name: 'New York County Supreme Court',
        position: { lat: 40.7143033, lng: -74.0036919 }
      },
      {
        name: 'Queens County Supreme Court',
        position: { lat: 40.7046946, lng: -73.8091145 }
      },
      {
        name: 'Kings County Supreme Court',
        position: { lat: 40.6940226, lng: -73.9890967 }
      },
      {
        name: 'Richmond County Supreme Court',
        position: { lat: 40.6412336, lng: -74.0768597 }
      },
      {
        name: 'Bronx Supreme Court',
        position: { lat: 40.8262388, lng: -73.9235238 }
      }
    ]
  };

  componentDidMount() {}

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: {
        name: props.title,
        position: props.position
      },
      activeMarker: marker,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      selectedPlace: {},
      activeMarker: {},
      showingInfoWindow: false
    });

  render() {
    const { google } = this.props;
    const bounds = new google.maps.LatLngBounds();
    this.state.places.forEach(place => bounds.extend(place.position));

    return (
      <Map
        id="map"
        role="application"
        tabIndex="-1"
        google={google}
        initialCenter={{
          lat: 40.6940226,
          lng: -73.9890967
        }}
        zoom={11}
        bounds={bounds}
      >
        {this.state.places.map((place, index) => (
          <Marker
            key={index}
            onClick={this.onMarkerClick}
            title={place.name}
            position={place.position}
          />
        ))}

        <InfoWindow
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyClMXgQ7Uzz-YA_dcFr8wGaDZ-2E9mQ8wA'
})(MapContainer);
