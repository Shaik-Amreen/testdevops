const test = require("../models/testModel")


exports.findtest = ((req, res) => {
    test.find((err, docs) => {
        !err ? res.send(docs) : res.send({ message: "error" })
    })
})