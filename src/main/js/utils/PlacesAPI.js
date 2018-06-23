/**
 * Generates URL of the paces.json file on your server
 *
 * @param {String} port - port where the localhost runs
 * @returns {String} - URL of the file
 */
const PLACES_URL = (port = 3000) => `http://localhost:${port}/data/places.json`;

/**
 * Fetches all places from local JSON file
 *
 * @returns {Promise} - promise on returning array of places
 */
export const getAll = () =>
  fetch(PLACES_URL())
    .then(res => res.json())
    .then(data => data.places);

// Client ID of Foresquare API
const FOURSQUARE_CLIENT_ID = 'BF3AAXY4NUS03G43EONWXNUGP5SPWY1GWDKVZIFC0TLXOJQH';
// Client Secret of Foresquare API
const FOURSQUARE_CLIENT_SECRET =
  'QQLO1VVK43P4KY5U14FWBWG11TYKCBMSUB5BI5QKCEYH43XB';
// Foresquare Venue API's version
const FOURSQUARE_API_VERSION = '20180323';
// Base URL of Foresquare Venue API
const FOURSQUARE_API_URL = 'https://api.foursquare.com/v2/venues/';

/**
 * Get URL of the paces.json file on your server.
 *
 * @param {String} venueId - id of the venue
 * @returns {String} - URL of the file
 */
const FOURSQUARE_VENUE_URL = venueId =>
  `${FOURSQUARE_API_URL}${venueId}?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=${FOURSQUARE_API_VERSION}`;

/**
 * Fetches venue data from Foresquare Venue API
 *
 * @param {String} venueId - id of the venue
 * @returns {Promise} - promise on returning venue information object
 */
export const getVenueInfo = venueId =>
  fetch(FOURSQUARE_VENUE_URL(venueId))
    .then(res => res.json())
    .then(info => info.response.venue)
    .catch(error => console.log(error));
