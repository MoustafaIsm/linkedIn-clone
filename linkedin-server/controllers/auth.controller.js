const User = require('../models/users.model');
const Company = require('../models/companies.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Company = require('../models/companies.model');

const login = async (req, res) => {
    const { email, password, isCompany } = req.body;
    let user;

    if (isCompany)
        user = await Company.findOne({ email }).select('+password');
    else
        user = await User.findOne({ email }).select('+password');

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

const register = async (req, res) => {
    const { isCompany } = req.body;
    let user;
    try {
        if (isCompany) {
            const { name, email, password } = req.body;
            const user = new Company();
            user.name = name;
            user.email = email;
            user.password = await bcrypt.hash(password, 10);
            await user.save();

        } else {
            const { first_name, last_name, email, password } = req.body;
            const user = new Company();
            user.first_name = first_name;
            user.last_name = last_name;
            user.email = email;
            user.password = await bcrypt.hash(password, 10);
            await user.save();
        }
        res.json({
            status: 'Success',
            message: 'Register succeded',
            data: {
                user: user
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: err.message
        });
    }
}