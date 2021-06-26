const express = require("express")

const app = express()


app.post("/client", (req, res) => {

    let data = req.body
    console.log(data)
    res.send("hello client")
})


app.get("/client/:id", (req, res) => {
    let productid = req.params.id
    console.log('clientid :' + clientid)
    res.send("hello client")
})

module.exports = app