/**
 * Returns true if password passed is valid, else returns false.
 *
 * A password is valid if it
 * - consists of 8 characters or longer
 * - contains 1 lowercase letter, 1 uppercase letter, 1 number, and at least one special character in (.!@#$%^&*)
 * @param {string} password - A password string
 */

const validatePassword = (password) => {
  const con1 = typeof password === "string" && password.length >= 8;
  const con2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])/.test(
    password
  );

  if (con1 && con2) return true;
  return false;
};

export default validatePassword;
