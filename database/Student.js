module.exports = function(mongoose) {
    var studentSchema = new mongoose.Schema({
        name: String
    });

    return mongoose.model('Student', studentSchema);
};
