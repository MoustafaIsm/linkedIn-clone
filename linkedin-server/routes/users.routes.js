const { Router } = require('express');
const { getUserByToken, updateUser, getNotifications } = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/get_user', authMiddleware, getUserByToken);
router.put('/update_user', authMiddleware, updateUser);
router.get('/get_notofications', authMiddleware, getNotifications);

module.exports = router;