const express = require("express")

const app = express()


app.post("/register", (req, res) => {

    let data = req.body
    console.log(data)
    res.send("hello registre")
})




module.exports=app
