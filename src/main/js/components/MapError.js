import React, { Component } from 'react';
import PropTypes from 'prop-types';

function MapError(props) {
  const errorMessage = () => {
    if (props.authError) {
      return 'Error occured while loading Google Maps in this site. Please take a look at JavaScript console for more info.';
    } else {
      return 'The API key included in the script element does not look correct. Please make sure you are using a correct API key. You can generate a new API key on the Google Cloud Platform Console.';
    }
  };

  return (
    <div className="map-error-container">
      <div className="map-error-content">
        <div className="map-error-icon">
          <img
            src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
            draggable="false"
            alt="Error Icon"
          />
        </div>
        <div className="map-error-title">Ooops! Error occured.</div>
        <div className="map-error-message">{errorMessage()}</div>
      </div>
    </div>
  );
}

MapError.propTypes = {
  authError: PropTypes.bool.isRequired
};

export default MapError;
