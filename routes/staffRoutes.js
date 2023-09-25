const express = require('express');
const router = express.Router();
const Staff = require('../model/staffModels');

router.post('/', async (req, res) => {
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
        res.status(500).json({ error: err })
    }
})

module.exports = router;