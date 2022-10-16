const User = require('../models/users.model');
const Company = require('../models/companies.model');
const Follow = require('../models/follows.model');

const addFollow = async (req, res) => {
    const { company_id } = req.params;
    Follow.create({
        user: req.body.user.id,
        following: company_id
    })
        .then(() => {
            res.json({
                status: 'Success',
                message: 'Follow added successfully'
            });
        })
        .catch((error) => {
            res.status(400).json({
                status: 'Failed',
                message: 'Couldn\'t update user',
            })
        });
}
