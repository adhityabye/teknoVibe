const { Schema, model, models } = require('mongoose')

const staffSchema = new Schema ({
    namaLengkap:{type: String, required: true},
    nim:{type: String, required: true},
    emailUGM:{type: String, required: true},
    programStudi:{type: String, required: true},
    angkatan:{type: Number, required: true},
    idLine:{type: String, required: true},
    pilihanDivisi:{type: String, required: true},
    alasan:{type: String, required: true},
    uploadCV:{type: String, required: true},
    createdAt:{type: Date, required:true, default: Date.now()},
})

const StaffModel = models.Staff || model('staff', staffSchema)
module.exports = StaffModel;