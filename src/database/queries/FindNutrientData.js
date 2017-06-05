const Food = require('../models/food');

/**
 * Finds a single food in the food collection.
 * @param {string} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the Food that matches the id
 */
 module.exports = (_id) => {
   return Food.findById(_id);
};
