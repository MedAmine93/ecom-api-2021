const express = require("express")

const app = express()


app.post("/register", (req, res) => {

    let data = req.body
    console.log(data)
    res.send("hello registre")
})

//delete
app.delete("/supp", (req, res) => {

    let data = req.body
    console.log(data)
    res.send("hello registre")
})

//put




//get






module.exports = app
