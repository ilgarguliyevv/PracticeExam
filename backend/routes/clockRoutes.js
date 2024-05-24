const express = require("express");
const router = express.Router();
const clockController = require("../controllers/clockControllers.js");

router.get("/clock", clockController.getAllClock);
router.get("/clock/:id", clockController.getClockById);
router.post("/clock", clockController.postClock);
router.patch("/clock/:id", clockController.patchClock);
router.delete("/clock/:id", clockController.getClockDelete);

module.exports = router;
