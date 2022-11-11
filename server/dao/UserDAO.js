const mongoose = require("mongoose");
const UserSchema = require("../schema/User");
const bcrypt = require("bcrypt");

const User = mongoose.model("User", UserSchema);

class UserDAO {
  static async comparePasswords(textPw, hashPw) {
    return await bcrypt.compare(textPw, hashPw);
  }

  static async createUser(username, password) {
    const existingUser = await User.findOne({ username });

    if (existingUser) return { error: "User already exists" };

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      return newUser;
    } catch (err) {
      console.log(err);
      return { error: "Unable to create user." };
    }
  }

  static async findUser(username, password) {
    const user = await User.findOne({ username });

    if (user) {
      const matchedPasswords = await this.comparePasswords(
        password,
        user.password
      );

      if (matchedPasswords) return user;
    }

    return { error: "Unable to find user." };
  }
}

module.exports = UserDAO;
