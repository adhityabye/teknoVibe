const eventModel = require('../model/event');
const Staff = require('../model/staffModels');
const mongoose = require('mongoose');

const searchEvent = async (req, res) => {
    try {
      const filter = {};
      const { name, open, sortBy } = req.query;
  
      if (name) {
        // Use a regular expression for exact (case-insensitive) match
        filter.eventName = new RegExp('^' + name + '$', 'i');
      }
      if (open) {
        filter.open = open;
      }
  
      const sortOptions = {};
      if (sortBy === 'name') {
        sortOptions.eventName = 1;
      } else if (sortBy === 'closest') {
        sortOptions.deadlineDate = 1;
      }
  
      const eventDocs = await eventModel.find(filter).sort(sortOptions);
  
      return res.status(200).json(eventDocs);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
   

const addStaff = async (req, res) => {
    try {
        const {
            namaLengkap, 
            nim, 
            emailUGM, 
            programStudi, 
            angkatan,
            idLine,
            pilihanDivisi,
            alasan,
            uploadCV,
            eventId // Add eventId to the request body
        } = req.body;

        // Input validation
        if (!namaLengkap || !nim || !emailUGM || !programStudi || !angkatan || !idLine || !pilihanDivisi || !alasan || !uploadCV || !eventId) {
            res.status(400).json({ error: 'Bad request. Missing required fields, including eventId' });
            return; // Return to exit the function early
        }

        // Check if the event is open for registration
        const event = await eventModel.findById(eventId);

        if (!event) {
            res.status(404).json({ error: 'Event not found' });
            return; // Return to exit the function early
        }

        if (!event.open) {
            res.status(400).json({ error: 'Event registration is closed' });
            return; // Return to exit the function early
        }

        // Create the staff data
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
        };
     
        // Create and save the staff
        const newStaff = await Staff.create(staffData);
        const savedStaffData = await newStaff.save();
        
        // Add the staff as a reference to the event's registeredParticipants array
        event.registeredParticipants.push(savedStaffData._id); // Use the _id of the staff member
        // Save the updated event document
        await event.save();
        
        res.status(201).json({ message: 'Staff created successfully and registered for the event', staff: savedStaffData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
};

const getRegisteredParticipants = async (req, res) => {
    try {
        const { eventId } = req.params;

        // Find the event by ID
        const event = await eventModel.findById(eventId);

        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        // Retrieve the registered participants based on the event's registeredParticipants array
        const participants = await Staff.find({ _id: { $in: event.registeredParticipants } });

        res.status(200).json({ participants });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const addEvent = async (req, res) => {
    try{
        const {eventName,eventDescription, department, eventProfileUrl, date, divisions, deadlineDate, tnc, open } = req.body;

        if (!eventName || !eventDescription || !department || !eventProfileUrl || !date || !divisions || !deadlineDate || !tnc) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const eventInserted = { eventName, eventDescription, department, eventProfileUrl, date, divisions, deadlineDate, tnc, open } 

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
    getRegisteredParticipants
};