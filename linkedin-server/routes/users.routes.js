const { Router } = require('express');
const { getUserByToken } = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/get_user', authMiddleware, getUserByToken);

module.exports = router;