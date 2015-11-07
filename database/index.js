var mongoose = require('mongoose');

// TODO: figure out how to not expose sensitive database connection info
mongoose.connect(config.database);

module.exports = {
    mongoose: mongoose
};
