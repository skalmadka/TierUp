module.exports = function(mongoose) {
    var questionSchema = new mongoose.Schema({
        question: String,
        tier: Number,
        tags: [String]
    });

    return mongoose.model('Question', questionSchema);
};
