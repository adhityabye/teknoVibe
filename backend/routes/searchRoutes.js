const express = require('express');
const router = express.Router();

router.post('/', staffController.addStaff);

  module.exports = router;