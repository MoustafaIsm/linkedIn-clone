const User = require('../models/users.model');
const Company = require('../models/companies.model');
const jwt = require('jsonwebtoken');

const getUserByToken = async (req, res) => {
    const user = req.body.user;
    res.json({
        status: 'Success',
        data: {
            user: user
        }
    });
}

module.exports = {
    getUserByToken
}