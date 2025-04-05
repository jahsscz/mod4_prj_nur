const express = require("express");
const router = express.Router();
const routeController = require("../controllers/routelog.controller");

router.get('/direction',routeController.getRoute)
router.post('/direction',routeController.createRoute)
router.patch('/direction',routeController.updateRoute)
router.delete('/direction',routeController.deleteRoute)

module.exports = router;