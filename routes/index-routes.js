const express = require('express');
const router  = express.Router();
const creditController = require('../controllers/credit-controller');

// Set up initial route 
router.get('/', creditController.display_credits);

// Post route 
router.post('/add', creditController.add_credits);

// Delete credit route 
router.post('/delete', creditController.delete_credit);

module.exports = router;