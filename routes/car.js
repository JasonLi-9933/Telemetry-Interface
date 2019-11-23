const express = require("express");
const router = express.Router();

const newData = require("../controllers/newData");
router.post("/newData", newData.handleNewData);

module.exports = router;