const { Router } = require('express');
const { addFollow, removeFollow } = require('../controllers/follow.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/add_follow/:company_id', authMiddleware, addFollow);
router.delete('/remove_follow/:company_id', authMiddleware, removeFollow);

module.exports = router;