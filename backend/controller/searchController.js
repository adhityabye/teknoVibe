const eventModel = require('../model/event');

const searchEvent = async (req, res) => {
    try{
        const eventDocs = await eventModel.find();
        return res.status(200).json(eventDocs);
    } catch(err){
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
  module.exports = {searchEvent};


