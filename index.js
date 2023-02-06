const express = require('express')
const app = express()
const http = require("http");
app.use(express.json());
const server = http.createServer(app);
const mongoose = require('mongoose')
const cors = require("cors");
app.use(cors({ orgin: "*" }));
const dotenv = require("dotenv").config();
const URL = process.env.DB;
const Numbers = require('./schema/numberSchema')
mongoose.set("strictQuery", false);
mongoose.connect(URL);
const { Server } = require("socket.io");



const client = new Server(client, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    },
});
client.on('connection', function (socket) {
    socket.on('New_Values', function (data) {
        Numbers.create(data)
        socket.broadcast.emit('receive_values', data);
        console.log(data);
    })

})



server.listen(process.env.PORT || 5000);