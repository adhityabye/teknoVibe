const eventModel = require('../model/event');

const searchEvent = async (req, res) => {
    try{
        const filter = {}
        const {name, open} = req.query;
        if(name){filter.eventName = new RegExp('^'+name+'$', "i")};
        if(open){filter.open = open};

        const eventDocs = await eventModel.find(filter);
        return res.status(200).json(eventDocs);
    } catch(err){
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
  module.exports = {searchEvent};


