import authStatus from "../constants/authStatus";

/**
 * Fetches user data from the server; can be used for both login or signup depending on the authtype
 * @param {string} authType - "LOGIN", "SIGNUP", "AUTHENTICATED"
 * @param {string} username - Username string
 * @param {string} password - Password string
 * @returns {object} user - User data object
 */
const fetchUser = async (authType, username, password) => {
  if (!authType || !username || !password)
    return { error: "Incomplete credentials" };

  let fetchData = {};
  let res = {};

  const URI =
    authType === authStatus.LOGIN
      ? process.env.REACT_APP_LOGIN_URI
      : authType === authStatus.SIGNUP
      ? process.env.REACT_APP_SIGNUP_URI
      : null;

  console.log(URI);
  if (URI) {
    fetchData = await fetch(URI, {
      body: {
        username,
        password,
      },
    });

    console.log(fetchData);

    res = await fetchData.json();
    return res;
  }
};

export default fetchUser;
