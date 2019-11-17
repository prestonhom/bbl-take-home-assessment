const Item = require('../models/item')

module.exports = {
    indexItems
}

async function indexItems(req, res){
    try {
        let items = await Item.find({})
        res.json(items)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

