const express = require("express")

const app = express()


app.post("/order", (req, res) => {

    let data = req.body
    console.log(data)
    res.send("hello registre")
})

app.get("/order/:id", (req, res) => {
    let productid = req.params.id
    console.log('orderid :' + orderid)
    res.send("hello product")
})

module.exports = app