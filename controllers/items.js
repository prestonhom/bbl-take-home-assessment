const Item = require('../models/item')

module.exports = {
    indexItems,
    addItem
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

async function addItem(req,res){
    try{
        let item =await new Item(req.body)
        console.log(item)
        item = await item.save()
        res.json(item)
    }
    catch(err){
        res.status(400).json(err);
    }
}

