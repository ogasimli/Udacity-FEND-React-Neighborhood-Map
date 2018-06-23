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
 * @returns {array} - array of places
 */
export const getAll = () =>
  fetch(PLACES_URL())
    .then(res => res.json())
    .then(data => data.places);
