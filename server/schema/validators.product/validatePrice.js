/**
 * Returns true if the price passed is a number greater than 0, else returns false.
 * @param {number} price - A numeric value
 */
const validatePrice = (price) => {
  return price > 0;
};

module.exports = validatePrice;
