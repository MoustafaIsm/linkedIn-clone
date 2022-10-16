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

const updateUser = async (req, res) => {
    const { id, ...data } = req.body.user;
    const newValues = req.body.update;
    if (req.body.is_company) {
        try {
            const company = await Company.findOneAndUpdate(id, {
                name: newValues.name,
                location: newValues.location,
                date_of_creation: newValues.date_of_creation,
                feild: newValues.feild,
                nbr_of_employees: newValues.nbr_of_employees,
                is_recruiting: newValues.is_recruiting,
                profile_picture_url: newValues.profile_picture_url
            });
            return res.json({
                status: 'Success',
                message: 'Updated user succesfully',
                data: {
                    user: company
                }
            });
        } catch (error) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Couldn\'t update user succesfully',
                error: error
            });
        }
    }
}

module.exports = {
    getUserByToken
}