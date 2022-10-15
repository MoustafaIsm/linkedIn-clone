const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, select: false },
    location: { type: String, default: 'NA' },
    date_of_birth: { type: Date, default: getDate() },
    education: { type: String, default: 'NA' },
    degree: { type: String, default: 'NA' },
    cv_url: { type: String, default: 'NA' },
    profile_picture_url: { type: String, default: 'NA' },
    works_at: { type: String, default: 'NA' }
});

const User = mongoose.model('User', userSchema);

const getDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return dd + '-' + mm + '-' + yyyy;
}

module.exports = User;