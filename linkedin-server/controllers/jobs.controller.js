const Job = require('../models/jobs.model');

const addJob = (req, res) => {
    const { discription } = req.body;
    const company_id = req.body.user._id;
    try {
        const job = new Job();
        job.discription = discription;
        job.company_id = company_id;
        job.applicants = [];
        job.save();
        res.json({
            status: 'Success',
            message: 'Job added succesfully',
            data: { job: job }
        });

    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to add job'
        });
    }
}

const removeJob = async (req, res) => {
    const job_id = req.body.job_id;
    Job.findByIdAndDelete(job_id)
        .then(() => {
            res.json({
                status: 'Success',
                message: 'Job removed succesfully',
            });
        })
        .catch((error) => {
            res.status(400).json({
                status: 'Failed',
                message: "Failed to delete job"
            });
        });
}

module.exports = {
    addJob,
    removeJob
}