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
 * Finds and returns name of the ctagory based on its id
 *
 * @param {String} id - id of the category
 * @returns {String} - name of the category
 */
export const getCategoryName = id =>
  categories.find(category => category.id === id).title;

/**
 * Finds and returns places based on the category id
 *
 * @param {array} places - places array that contains all places
 * @param {String} categoryId - id of the category
 * @returns {array} - returns new array of places having specified category id
 */
export const getPlacesByCategory = (places, categoryId) =>
  places.filter(place => place.category === categoryId);

/**
 * Finds and returns array of unique categories from places array
 *
 * @param {array} places - places array
 * @returns {array} - returns new array of unique categories
 */
export const getUniqueCategoryIds = places => [
  ...new Set(places.map(place => place.category))
];
