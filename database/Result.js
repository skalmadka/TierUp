module.exports = function(mongoose) {
    var resultSchema = new mongoose.Schema({
        date: Date,
        student: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
        question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
        type: String,
        correct: Boolean
    });

    return mongoose.model('Result', resultSchema);
};
