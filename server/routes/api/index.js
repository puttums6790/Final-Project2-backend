const router = require("express").Router();
const donationRoutes = require("./donate");

// Donation routes
router.use(donationRoutes);


module.exports = router;
