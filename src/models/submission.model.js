const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        quizId: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
    }
)

module.exports = mongoose.model("submissions", submissionSchema)