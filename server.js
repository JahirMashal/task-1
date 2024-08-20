require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();


connectDB();


app.use(express.json());


app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const Time = new Date();
const timestamp = Time.getTime();

app.get('/', (req,res) => {
    res.send(`<h1>Finally task completed at ${Time}</h1>`)

})
