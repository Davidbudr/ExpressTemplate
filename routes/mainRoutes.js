const express = require('express');
const router = express.Router();

const SourceController = require('../controllers/mainController');

router.get('/', SourceController.getMain);

module.exports = router;