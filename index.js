const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
const connect = require('./config/database'); // Database connection
connect();

app.use(cors(
    {
        origin: ['http://localhost:3001', 'http://localhost:3000',  "http://localhost:5173",],
        credentials: true,
    }
))


const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


