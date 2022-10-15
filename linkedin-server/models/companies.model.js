const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    location: { type: String, default: 'NA' },
    date_of_creation: { type: Date, default: '00-00-0000' },
    feild: { type: String, default: 'NA' },
    nbr_of_employees: { type: Number, default: 0 },
    is_recruiting: { type: Boolean, default: false },
    profile_picture_url: { type: String, default: 'NA' },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;