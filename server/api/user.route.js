const { Router } = require("express");
const UsersController = require("./user.controller");

const userRouter = new Router();
userRouter.route("/signup").post(UsersController.apiCreateUser);
userRouter.route("/login").post(UsersController.apiLogIn);

module.exports = userRouter;
