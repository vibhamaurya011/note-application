const express = require("express")
const { register, login, logout } = require("../controller/user.controller")

const userRoute = express.Router()

userRoute.post("/register", register)
userRoute.post("/login", login)
userRoute.post("/logout", logout)

module.exports={userRoute}