const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const dbConnect = async () => {

    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
};

module.exports = dbConnect;