import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: 'white',
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}
  >
    {text}
  </div>
);

class MapContainer extends Component {
  state = {
    locations: [
      {
        title: 'Crystal Bridges Museum of American Art',
        location: { lat: 36.382455, lng: -94.202809 },
        id: '4c001046c30a2d7f45f1111d'
      },
      {
        title: 'The Walmart Museum',
        location: { lat: 36.372612, lng: -94.208917 },
        id: '4bc76df914d79521d25e67e9'
      },
      {
        title: 'Scott Family Amazeum',
        location: { lat: 36.379356, lng: -94.197245 },
        id: '55997726498e20cc6ad28294'
      },
      {
        title: 'The Walmart AMP',
        location: { lat: 36.302676, lng: -94.183726 },
        id: '533629ef11d26583cf2709a7'
      },
      {
        title: 'Whole Hog Cafe',
        location: { lat: 36.333933, lng: -94.190465 },
        id: '4b4f87fff964a520300a27e3'
      },
      {
        title: 'Carabbas Italian Grill',
        location: { lat: 36.306328, lng: -94.187363 },
        id: '4b8d3d63f964a52046ef32e3'
      },
      {
        title: "Napoli's Italian Restaurant",
        location: { lat: 36.333104, lng: -94.179032 },
        id: '4f63c83de4b06cb9faa0782f'
      },
      {
        title: 'Thai Basil',
        location: { lat: 36.338589, lng: -94.209967 },
        id: '547fa8d2498ed66921ce6b96'
      },
      {
        title: 'Malco Rogers Towne Cinema Grill',
        location: { lat: 36.340568, lng: -94.17644 },
        id: '4bc8f093b6c49c742a798d91'
      },
      {
        title: 'Bentonville Brewing Company',
        location: { lat: 36.316812, lng: -94.117871 },
        id: '5570cc25498e84218b1f2db9'
      }
    ]
  };

  static defaultProps = {
    center: {
      lat: 36.316812,
      lng: -94.117871
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyClMXgQ7Uzz-YA_dcFr8wGaDZ-2E9mQ8wA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.locations.map(location => (
            <AnyReactComponent
              lat={location.location.lat}
              lng={location.location.lng}
              text={location.title}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
