const express = require("express");
const router = express.Router();



router.get("/", function(req, res) {
  res
    .status(200)
    .json({ success: "true", msg: "Get all OSes" });
});

router.get("/:id", function(req, res) { 
 	res
		.status(200)
		.json({ success: "true", msg: `Get OS ${req.params.id}` });
});

router.post("/", function(req, res) { 
  res
    .status(200)
    .json({ success: "true", msg: "Create new OS" });
});

router.put("/:id", function(req, res) { 
  res
    .status(200)
    .json({ success: "tatau", msg: `Update OS ${req.params.id}` });
});

router.delete("/:id", function (req, res) {
 	res
		.status(200)
		.json({ success: "true", msg: `Delete OS ${req.params.id}` });
});

module.exports = router;