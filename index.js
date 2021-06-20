const express = require("express")

const app = express()
app.use(express.json())

app.get("/user", (req, res) => {
    res.send(" hello api")
})

app.get("/product/:id", (req, res) => {
    let productid = req.params.id
    console.log('productid :' + productid)
    res.send("hello product")
})

app.post("/user/register", (req, res) => {

    let data = req.body
    console.log(data)
    res.send("hello registre")
})

app.listen(3000, () => {
    console.log("server started");

})



