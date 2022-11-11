/**
 * Returns true if username passed is valid, else returns false.
 *
 * A username is valid if it
 * - is not blank
 * - has at least three characters
 * - is not longer than 25 characters
 * - contains only underscores as special characters
 * @param {string} username - A username string
 */
const validateUsername = (username) => {
  const con1 =
    typeof username === "string" &&
    username.length >= 3 &&
    username.length <= 25;
  const con2 = /^[a-zA-Z0-9_@]+$/.test(username);

  if (con1 && con2) return true;
  return false;
};

export default validateUsername;
