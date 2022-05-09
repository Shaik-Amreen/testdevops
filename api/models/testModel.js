const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    textdata: { type: "string", required: true },
})

const testModel = mongoose.model("testModel", Schema)

module.exports = testModel
