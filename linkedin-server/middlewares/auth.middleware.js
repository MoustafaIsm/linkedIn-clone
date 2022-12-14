const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
const Company = require('../models/companies.model');

const authMiddleware = async (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];

    if (!token)
        return res.status(401).json({
            status: 'failed',
            message: 'You are not authorized'
        });

    try {
        const isCompany = req.body.is_company;
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (isCompany) {
            const user = await Company.findOne({ email: decoded.email }).lean();
            req.body.user = { ...user };
        } else {
            const user = await User.findOne({ email: decoded.email }).lean();
            req.body.user = { ...user };
        }
        next()
    } catch (error) {
        return res.status(401).json({
            status: 'failed',
            message: 'You are not authorized ' + error.message
        });
    }
}

module.exports = authMiddleware;