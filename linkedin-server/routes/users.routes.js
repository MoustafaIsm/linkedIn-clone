const { Router } = require('express');
const { getUserByToken, updateUser } = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/get_user', authMiddleware, getUserByToken);
router.put('/update_user', authMiddleware, updateUser);

module.exports = router;