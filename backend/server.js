const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//////////////  Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("MongoDB connected");
});

const excerciseRouter = require("./routes/excercise");
const userRouter = require("./routes/users");

app.use('/excercise', excerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

// Incase the the server shows busy, kill the active processes
// sudo lsof -i :5000
// kill -9 {PID}