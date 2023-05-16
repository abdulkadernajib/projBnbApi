const mongoose = require('mongoose');

require('dotenv').config()

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://najibak:${process.env.DB_PW}@cluster0.dk3utd9.mongodb.net/projBnB`)
    console.log('Database Connected');
}

module.exports = main;