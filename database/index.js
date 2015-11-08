var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

module.exports = {
    mongoose: mongoose,
    Question: require('./Question')(mongoose),
    Student: require('./Student')(mongoose)
};
