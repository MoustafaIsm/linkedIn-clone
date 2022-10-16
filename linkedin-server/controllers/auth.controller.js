const User = require('../models/users.model');
const Company = require('../models/companies.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password, isCompany } = req.body;
    let user;

    if (isCompany)
        user = Company.findOne({ email }).select('+password');
    else
        user = User.findOne({ email }).select('+password');

    if (!user)
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Credentials'
        });

    const matches = bcrypt.compare(password, user.password);
    if (!matches)
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Credentials'
        });

    const token = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET_KEY, {
        expiresIn: '2h'
    });
    res.status(200).json({
        status: 'Success',
        message: 'Login successfully',
        data: {
            token: token
        }
    });
}