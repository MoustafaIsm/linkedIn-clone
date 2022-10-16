const express = require('express');
require('dotenv').config();
require('./config/database.config');

const app = express();
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const usersRoutes = require('./routes/users.routes');
app.use('/users', usersRoutes);

const followsRoute = require('./routes/follows.routes');
app.use('/follows', followsRoute);

const jobsRoute = require('./routes/jobs.routes');
app.use('/jobs', jobsRoute);

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})