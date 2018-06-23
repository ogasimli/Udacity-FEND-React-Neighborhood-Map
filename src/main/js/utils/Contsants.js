/**
 * Object that holds spesifications of place categories
 */
export const categories = [
  {
    id: 'historic_monument',
    title: 'Monuments',
    markerIcon:
      'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v2-2-medium.png,assets/icons/poi/tactile/pinlet-2-medium.png,assets/icons/poi/quantum/pinlet/historic_pinlet-2-medium.png&highlight=ff000000,ffffff,ffffff,9026b5&color=ff000000?scale=1.5'
  },
  {
    id: 'park',
    title: 'Parks',
    markerIcon:
      'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v2-2-medium.png,assets/icons/poi/tactile/pinlet-2-medium.png,assets/icons/poi/quantum/pinlet/cemetery_pinlet-2-medium.png&highlight=ff000000,ffffff,ffffff,9026b5&color=ff000000?scale=1.5'
  },
  {
    id: 'museum',
    title: 'Museums',
    markerIcon:
      'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v2-2-medium.png,assets/icons/poi/tactile/pinlet-2-medium.png,assets/icons/poi/quantum/pinlet/museum_pinlet-2-medium.png&highlight=ff000000,ffffff,ffffff,9026b5&color=ff000000?scale=1.5'
  },
  {
    id: 'music_hall',
    title: 'Music Halls',
    markerIcon:
      'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v2-2-medium.png,assets/icons/poi/tactile/pinlet-2-medium.png,assets/icons/poi/quantum/pinlet/note_pinlet-2-medium.png&highlight=ff000000,ffffff,ffffff,9026b5&color=ff000000?scale=1.5'
  },
  {
    id: 'sports_hall',
    title: 'Sports Halls',
    markerIcon:
      'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,assets/icons/poi/tactile/pinlet_outline_v2-2-medium.png,assets/icons/poi/tactile/pinlet-2-medium.png,assets/icons/poi/quantum/pinlet/stadium_pinlet-2-medium.png&highlight=ff000000,ffffff,ffffff,9026b5&color=ff000000?scale=1.5'
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
    featureType: 'all',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        hue: '#bc00ff'
      },
      {
        saturation: '0'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#e8b8f9'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels',
    stylers: [
      {
        color: '#ff0000'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#3e114e'
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      },
      {
        color: '#a02aca'
      }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        color: '#2e093b'
      }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#9e1010'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ff0000'
      }
    ]
  },
  {
    featureType: 'landscape.natural.landcover',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        color: '#58176e'
      }
    ]
  },
  {
    featureType: 'landscape.natural.landcover',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        color: '#a02aca'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d180ee'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        color: '#a02aca'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      },
      {
        color: '#ff0000'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#a02aca'
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#cc81e7'
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        hue: '#bc00ff'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#6d2388'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#c46ce3'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#b7918f'
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#280b33'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        color: '#a02aca'
      }
    ]
  }
];
