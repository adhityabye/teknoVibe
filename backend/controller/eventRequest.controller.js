const eventModel = require('../model/event');
const Staff = require('../model/staffModels');
const mongoose = require('mongoose');

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

const addStaff = async (req, res) => {
    try {
        const { namaLengkap, 
                nim, 
                emailUGM, 
                programStudi, 
                angkatan,
                idLine,
                pilihanDivisi,
                alasan,
                uploadCV
                } = req.body
        
        //input validation
        if (!namaLengkap || !nim || !emailUGM || !programStudi || !angkatan || !idLine || !pilihanDivisi || !alasan || !uploadCV) {
            res.status(400).json({ error: 'Bad request. Missing required fields' })
        }

        const staffData = {
            namaLengkap,
            nim,
            emailUGM,
            programStudi,
            angkatan,
            idLine,
            pilihanDivisi,
            alasan,
            uploadCV,
        }
        const newStaff = await Staff.create(staffData)
        const savedStaffData = await newStaff.save()
        res.status(201).json({ message: 'Staff created successfully', staff: savedStaffData })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err })
    }
}

const addEvent = async (req, res) => {
    try{
        const {eventName,eventDescription, date, divisions, deadlineDate, tnc, open } = req.body;

        if (!eventName || !eventDescription || !date || !divisions || !deadlineDate || !tnc) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const eventInserted = { eventName, eventDescription, date, divisions, deadlineDate, tnc, open } 

        const newEvent= await eventModel.create(eventInserted);
        await newEvent.save();

        return res.status(201).json({ message: 'Event registered successfully' });
    }catch{error}{
        console.error(error);
        
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const editEvent = async (req, res) => {
    const { eventId } = req.params; // Correct the parameter name to 'eventId'
    const updateData = req.body;
  
    try {
      // Validate the ObjectId and update the event
      if (!mongoose.isValidObjectId(eventId)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
      }
  
      // Find the event in your MongoDB collection
      const event = await eventModel.findById(eventId);
  
      // Check if the event was found
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
  
      // Apply partial updates to the event fields
      Object.assign(event, updateData);
  
      // Save the updated event
      const updatedEvent = await event.save();
  
      // Respond with the updated event
      res.json(updatedEvent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.eventId;
      //   console.log(eventId);
    
        // Use Mongoose to find and delete the event by ID
        const deletedEvent = await eventModel.findByIdAndDelete(eventId);
    
        if (!deletedEvent) {
          return res.status(404).json({ message: 'Event not found' });
        }
    
        return res.status(200).json({ message: 'Event deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    searchEvent,
    addStaff,
    addEvent,
    editEvent,
    deleteEvent,
};