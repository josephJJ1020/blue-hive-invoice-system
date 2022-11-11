/**
 * Returns true if the value passed is an integer greater than 0, else returns false.
 * @param {number} number - A numeric value
 */
const validateQuantity = (number) => {
  return Number.isInteger(number) && parseInt(number) > 0;
};

module.exports = validateQuantity;
