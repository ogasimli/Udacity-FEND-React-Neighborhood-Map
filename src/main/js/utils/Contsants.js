/**
 * Object that holds mock places
 */
export const mockPlaces = [
  {
    id: '4bf005a8c8d920a11f529430',
    title: 'Maiden Tower',
    address: 'Old City, Baku, Azerbaijan',
    category: 'historic_monument',
    latlng: { lat: 40.366284, lng: 49.837258 }
  },
  {
    id: '4e888042d3e328efd528c889',
    title: 'Icherisheher (Old City)',
    address: 'Neftchiler Av, Baku, Azerbaijan',
    category: 'historic_monument',
    latlng: { lat: 40.366471, lng: 49.834964 }
  },
  {
    id: '512b1ce5e4b05be0bb005f45',
    title: 'Ateshgah (Fire Temple)',
    address: 'Surakhani, Absheron, Azerbaijan',
    category: 'historic_monument',
    latlng: { lat: 40.415711, lng: 50.008476 }
  },
  {
    id: '4de9090488774aa92cae5232',
    title: 'Seaside Boulevard',
    address: 'Neftchiler Av, Baku, Azerbaijan',
    category: 'park',
    latlng: { lat: 40.370668, lng: 49.849895 }
  },
  {
    id: '4f9655eabb3d831b8b278a22',
    title: 'Mini Venice',
    address: 'Seaside Boulevard, Baku, Azerbaijan',
    category: 'park',
    latlng: { lat: 40.361517, lng: 49.835758 }
  },
  {
    id: '4e29b5c1149554c77446cdeb',
    title: 'Highland Park',
    address: "Lermontov St (Martyrs' Alley), Baku, Azerbaijan",
    category: 'park',
    latlng: { lat: 40.357472, lng: 49.830389 }
  },
  {
    id: '4cb1a6f86c269521ba87b8d9',
    title: 'Carpet Museum',
    address: '123A Neftchiler Av, Baku, Azerbaijan',
    category: 'museum',
    latlng: { lat: 40.3602, lng: 49.835032 }
  },
  {
    id: '5045d2ace4b0ced4ceb05990',
    title: 'History Museum',
    address: '4 H. Z. Taghiyev St, Baku, Azerbaijan',
    category: 'museum',
    latlng: { lat: 40.369369, lng: 49.839844 }
  },
  {
    id: '4dc2847bd1643ed27a502735',
    title: 'Modern Art Museum',
    address: '5 Yusif Safarov St, Baku, Azerbaijan',
    category: 'museum',
    latlng: { lat: 40.378222, lng: 49.864645 }
  },
  {
    id: '50cb39e5e4b0c490b5ff8c7b',
    title: 'Mugam Center',
    address: '9 Neftchiler Av, Baku, Azerbaijan',
    category: 'music_hall',
    latlng: { lat: 40.360915, lng: 49.834993 }
  },
  {
    id: '5059dd2ce4b02a61e2a69e83',
    title: 'Philharmonic Hall',
    address: '10 Istiglaliyyat St, Baku, Azerbaijan',
    category: 'music_hall',
    latlng: { lat: 40.364601, lng: 49.831505 }
  },
  {
    id: '50e3d8bee4b08361dc7cbb90',
    title: 'Baku Olympic Stadium',
    address: '323 H. Aliyev Av, Baku, Azerbaijan',
    category: 'sports_hall',
    latlng: { lat: 40.429839, lng: 49.919841 }
  },
  {
    id: '5069233590e7df9ed3466c0a',
    title: 'National Gymnastics Arena',
    address: '108 H. Aliyev Av, Baku, Azerbaijan',
    category: 'sports_hall',
    latlng: { lat: 40.418574, lng: 49.917164 }
  }
];

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
 * @param {String} apiKey - Google Maps API key
 * @returns {String} - URL for loading Google Maps
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

/**
 * Custom purple map style
 *
 * @author https://snazzymaps.com/explore?text=&sort=&tag=&color=purplen
 *
 */
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
