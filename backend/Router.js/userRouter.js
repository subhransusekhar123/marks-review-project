const express = require('express');
const userRouter = express.Router();

const { getUserData,postUserData } = require("../controller/userController");

userRouter.get("/getUser",getUserData);
userRouter.post("/postUser",postUserData)
module.exports = userRouter;