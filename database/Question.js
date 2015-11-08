module.exports = function(mongoose) {
    var questionSchema = new mongoose.Schema({
        question: String,
        choices: [String],
        answer: String,
        subject: String,
        tier: Number,
        tags: [String],
        practice: Boolean
    });

    return mongoose.model('Question', questionSchema);
};
