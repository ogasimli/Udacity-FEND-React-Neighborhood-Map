import { categories } from '../utils/Contsants';

/**
 * Finds and returns marker icon of the place based on its category
 *
 * @param {Object} place - place object
 * @returns {String} - URL of the icon
 */
export const getMarkerIcon = place =>
  categories.find(category => category.id === place.category).markerIcon;

/**
 * Finds and returns places based on the category id
 *
 * @param {array} places - places array that contains all places
 * @param {String} categoryId - id of the category
 * @returns {array} - returns new array of places having specified category id
 */
export const getPlacesByCategory = (places, categoryId) =>
  places.filter(place => place.category === categoryId);
