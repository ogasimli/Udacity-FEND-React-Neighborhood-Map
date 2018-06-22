/**
 * Object that holds spesifications of place categories
 */
export const categories = [
  {
    id: 'historic_monument',
    title: 'Monuments',
    markerIcon:
      'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v2-2-medium.png,assets/icons/poi/tactile/pinlet-2-medium.png,assets/icons/poi/quantum/pinlet/historic_pinlet-2-medium.png&highlight=ff000000,ffffff,4CAF50,ffffff&color=ff000000?scale=1.5'
  },
  {
    id: 'park',
    title: 'Parks',
    markerIcon:
      'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v2-2-medium.png,assets/icons/poi/tactile/pinlet-2-medium.png,assets/icons/poi/quantum/pinlet/cemetery_pinlet-2-medium.png&highlight=ff000000,ffffff,4CAF50,ffffff&color=ff000000?scale=1.5'
  },
  {
    id: 'museum',
    title: 'Museums',
    markerIcon:
      'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v2-2-medium.png,assets/icons/poi/tactile/pinlet-2-medium.png,assets/icons/poi/quantum/pinlet/museum_pinlet-2-medium.png&highlight=ff000000,ffffff,4CAF50,ffffff&color=ff000000?scale=1.5'
  },
  {
    id: 'music_hall',
    title: 'Music Halls',
    markerIcon:
      'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v2-2-medium.png,assets/icons/poi/tactile/pinlet-2-medium.png,assets/icons/poi/quantum/pinlet/note_pinlet-2-medium.png&highlight=ff000000,ffffff,4CAF50,ffffff&color=ff000000?scale=1.5'
  },
  {
    id: 'sports_hall',
    title: 'Sports Halls',
    markerIcon:
      'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v2-2-medium.png,assets/icons/poi/tactile/pinlet-2-medium.png,assets/icons/poi/quantum/pinlet/stadium_pinlet-2-medium.png&highlight=ff000000,ffffff,4CAF50,ffffff&color=ff000000?scale=1.5'
  }
];

/**
 * Google Maps API key
 */
const GOOGLE_API_KEY = 'AIzaSyClMXgQ7Uzz-YA_dcFr8wGaDZ-2E9mQ8wA';

/**
 * Returns URL for loading Google Maps
 *
 * @param {string} apiKey - Google Maps API key
 * @returns {string} - URL for loading Google Maps
 */
export const MAPS_URL = (apiKey = GOOGLE_API_KEY) =>
  `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3&callback=initMap`;

/**
 * Default center coordinates for Google Maps
 */
export const MAPS_DEFAULT_CENTER = {
  lat: 40.429839,
  lng: 49.831505
};

/**
 * Default zoom value of Google Maps
 */
export const MAPS_DEFAULT_ZOOM = 12;

export const MAPS_CUSTOM_STYLE = [
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#e0efef'
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#c0e8e8'
      },
      {
        hue: '#1900ff'
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 100
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.local',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 700
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'water',
    stylers: [
      {
        color: '#7dcdcd'
      }
    ]
  }
];
