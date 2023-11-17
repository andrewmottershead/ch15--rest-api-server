const express = require("express");
const router = express.Router();
const {
  getMaxims,
  addMaxim,
  updateMaxim,
  removeMaxim,
} = require("../controllers/maxims");

router.get("/:id?", getMaxims)
.post("/", addMaxim)
.put("/:id", updateMaxim)
.delete("/:id", removeMaxim);

module.exports = router;