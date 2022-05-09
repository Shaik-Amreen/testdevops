const express = require("express")
var router = express.Router()

const test = require("../controllers/testController")


router.post("/findtest", test.findtest)


module.exports = router
