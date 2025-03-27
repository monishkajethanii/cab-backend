const express = require("express")
const router = express.Router();
const driverController = require("../controllers/driverController")
router.post('/register',driverController.register);
router.get('/getDrivers',driverController.getDrivers);
module.exports = router;