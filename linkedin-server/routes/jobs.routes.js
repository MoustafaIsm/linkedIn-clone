const { Router } = require('express');
const { addJob, removeJob, addApplicant } = require('../controllers/jobs.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.post('/add_job', authMiddleware, addJob);
router.delete('/remove_job', authMiddleware, removeJob);
router.put('/add_applicants', authMiddleware, addApplicant);

module.exports = router;