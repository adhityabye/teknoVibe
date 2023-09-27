const express = require('express');
const router = express.Router();
const searchController = require('../controller/searchController');

router.post('/', searchController.searchEvent);

module.exports = router;