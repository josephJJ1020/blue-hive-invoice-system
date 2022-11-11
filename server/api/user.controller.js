const UserDAO = require("../dao/UserDAO");

class UsersController {
  static async apiCreateUser(req, res) {
    console.log("someone signed up");
    const { username, password } = req.body;
    const queryRes = await UserDAO.createUser(username, password);

    console.log(queryRes);
    return res.json(queryRes);
  }

  static async apiLogIn(req, res) {
    console.log("someone logged in");
    const { username, password } = req.body;
    const queryRes = await UserDAO.findUser(username, password);

    return res.json(queryRes);
  }
}

module.exports = UsersController;
