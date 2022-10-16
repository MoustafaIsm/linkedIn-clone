const { Router } = require('express');
const { addJob } = require('../controllers/jobs.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.post('/add_job', authMiddleware, addJob);

module.exports = router;