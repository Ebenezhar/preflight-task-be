const mongoose = require("mongoose");

const numberSchema = new mongoose.Schema({
    input1: { type: String, required: true },
    input2: { type: String, required: true },
    input3: { type: String, required: true },
    input4: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Numbers", numberSchema);