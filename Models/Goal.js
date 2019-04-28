const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    title: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("goals", GoalSchema);