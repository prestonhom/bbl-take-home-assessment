const express = require('express')
const router = express.Router();
const itemsCtrl = require('../../controllers/items');

router.get('/', itemsCtrl.indexItems)
router.post('/items/add', itemsCtrl.addItem)

module.exports = router;