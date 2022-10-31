const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    product_name: { type: String, required: true, trim: true, maxlength: [10, "name cannot be more than 10 characters"] },
    product_description: { type: String, required: true, trim: true, maxlength: [40, "description cannot be more than 40 characters"] },
    product_varieties: { type: Array, required: true }
},
    {
        timestamps: {
            createdAt: 'date_uploaded',
            updatedAt: 'date_edited'
        }
    })
module.exports = mongoose.model('Task', TaskSchema)