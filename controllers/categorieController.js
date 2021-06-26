const express = require("express")

const app = express()


app.post("/register", (req, res) => {

    let data = req.body
    console.log(data)
    res.send("hello categorie")
})

app.get("/categorie/:id", (req, res) => {
    let productid = req.params.id
    console.log('categorietid :' + categorietid)
    res.send("hello product")
})

module.exports = app