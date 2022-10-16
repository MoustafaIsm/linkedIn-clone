const Follow = require('../models/follows.model');

const addFollow = (req, res) => {
    const { company_id } = req.params;

    Follow.create({
        user: req.body.user._id,
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
                message: 'Couldn\'t add follow',
            })
        });
}

const removeFollow = (req, res) => {
    const { company_id } = req.params;
    Follow.findOneAndDelete({
        user: req.body.user.id,
        following: company_id
    })
        .then(() => {
            res.json({
                status: 'Success',
                message: 'Follow removed successfully'
            });
        })
        .catch((error) => {
            res.status(400).json({
                status: 'Failed',
                message: 'Couldn\'t remove follow',
            })
        });
}

module.exports = {
    addFollow,
    removeFollow
}
