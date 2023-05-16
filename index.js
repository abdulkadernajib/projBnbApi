const express = require('express');
const cors = require('cors');

const app = express();
const { db } = require('./db');
const roomsRouter = require('./Routes/rooms')
const miscRouter = require('./Routes/miscellaneous')

app.set("view engine","ejs")
app.use(cors({ origin: 'http://localhost:4200' }))
app.use(express.json())
app.use('/api/', roomsRouter.router)
app.use('/api/', miscRouter.router)

const dateTime = new Date().toUTCString();
app.listen('3000', () => console.log(`Listening on port 3000...${dateTime}`))
