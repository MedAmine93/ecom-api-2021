const express = require("express")

const app = express()


app.post("/register", (req, res) => {

    let data = req.body
    console.log(data)
    res.send("hello registre")
})

app.get("/product/:id", (req, res) => {
    let productid = req.params.id
    console.log('productid :' + productid)
    res.send("hello product")
})

module.exports = app