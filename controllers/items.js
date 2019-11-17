const Item = require('../models/item')

module.exports = {
    indexItems,
    createItem
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

async function createItem(req,res){
    try{
        let item =await new Item(req.body)
        item = await item.save()
        res.json(item)
    }
    catch(err){
        res.status(400).json(err);
    }
}

