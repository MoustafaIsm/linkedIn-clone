const User = require('../models/users.model');
const Company = require('../models/companies.model');
const Follow = require('../models/follows.model');
const Job = require('../models/jobs.model');

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
        Company.findOneAndUpdate(id, {
            name: newValues.name,
            location: newValues.location,
            date_of_creation: newValues.date_of_creation,
            feild: newValues.feild,
            nbr_of_employees: newValues.nbr_of_employees,
            is_recruiting: newValues.is_recruiting,
            profile_picture_url: newValues.profile_picture_url
        })
            .then((company) => {
                res.json({
                    status: 'Success',
                    message: 'Updated user succesfully',
                })
            })
            .catch((error) => {
                res.status(400).json({
                    status: 'Failed',
                    message: 'Couldn\'t update user',
                })
            });
    }
    User.findOneAndUpdate(id, {
        first_name: newValues.first_name,
        last_name: newValues.last_name,
        location: newValues.location,
        education: newValues.education,
        degree: newValues.degree,
        cv_url: newValues.cv_url,
        profile_picture_url: newValues.profile_picture_url,
        works_at: newValues.works_at
    })
        .then((user) => {
            res.json({
                status: 'Success',
                message: 'Updated user succesfully',
            })
        })
        .catch((error) => {
            res.status(400).json({
                status: 'Failed',
                message: 'Couldn\'t update user',
            })
        });

}

const getNotifications = async (req, res) => {
    const user = req.body.user;
    try {
        const following = await Follow.find({ user: user._id });
        const notifications = [];
        for (const item of following) {
            const temp = await Job.find({ company_id: item });
            notifications.concat(temp);
        }
        res.json(notifications)
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Couldn\'t get notification',
            error: error.message
        })
    }
}

module.exports = {
    getUserByToken,
    updateUser,
    getNotifications
}