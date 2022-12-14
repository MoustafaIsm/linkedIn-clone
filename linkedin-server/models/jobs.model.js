const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    discription: { type: String, required: true },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true }]
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;