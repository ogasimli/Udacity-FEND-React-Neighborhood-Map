/**
 * Get URL of the paces.json file on your server.
 *
 * @returns {String} - URL of the file
 */
const PLACES_URL = () => {
  const port = 3000; // Change this to your server port
  return `http://localhost:${port}/data/places.json`;
};

/**
 * Fetch all places from local JSON file
 *
 * @returns {array} - array of places
 */
export const getAll = () =>
  fetch(PLACES_URL())
    .then(res => res.json())
    .then(data => data.places);
