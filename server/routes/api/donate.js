const router = require("express").Router();
var uploader = require('express-fileuploader');
const donationController = require("../../controllers/donationController");
const {AWS} = require("../../uploaders");
const path = require("path");


router.get('/shop', (req, res, next) => {
	donationController.findAll(req, res);
})

router.post('/donate', (req, res, next) => {
	donationController.create(req, res);
})

router.get("/uploads/:user/:imageName", (req, res) =>{
	res.sendFile(path.join(__dirname, `../../uploads/${req.params.user}/${req.params.imageName}`));
})

router.get("/uploads/:imageName", (req, res) =>{
	console.log("get", path.join(__dirname, `../../uploads/${req.params.imageName}`));
	res.sendFile(path.join(__dirname, `../../uploads/${req.params.imageName}`));
})

// local
router.post("/upload/image", (req, res, next) =>{
	console.log("req.files",req.files);
	uploader.upload('local', req.files['file'], function(err, files) {
		console.log("****** files *****", files);
		if (err) {
		  return next(err);
		}
		res.json(files);
	  });
})

// production
// router.post("/upload/image", AWS.uploadFile);





module.exports = router;
