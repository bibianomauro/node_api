const express = require("express");
const oses_controller = require("../controllers/oses.js");

const router = express.Router();


router.get("/", oses_controller.get_oses);
router.get("/:id", oses_controller.get_os);
router.post("/", oses_controller.post_os);
router.put("/:id", oses_controller.put_os);
router.delete("/:id", oses_controller.delete_os);

module.exports = router;