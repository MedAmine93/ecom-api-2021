const express = require("express")

const userController =require ('./controllers/userController')

const app = express()
app.use(express.json())

app.use("/user" , userController)

app.get("/user", (req, res) => {
    res.send(" hello api")
})

app.get("/product/:id", (req, res) => {
    let productid = req.params.id
    console.log('productid :' + productid)
    res.send("hello product")
})



app.listen(3000, () => {
    console.log("server started");

})




