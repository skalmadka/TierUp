module.exports = function(mongoose) {
    var studentSchema = new mongoose.Schema({
        question: String,
        tier: Number,
        tags: [String]
    });

    return mongoose.model('Student', studentSchema);
};
