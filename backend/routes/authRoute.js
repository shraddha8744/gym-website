const express=require("express")
const router=express.Router()
const {encryptPassword,checkUser}=require("../middleware/AuthenticationMidlleware")
const { signup, login } = require("../controllers/authController")

router.post("/signup",encryptPassword,signup)
router.post("/login",checkUser,login)
module.exports=router