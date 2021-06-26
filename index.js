const express = require("express")

const userController = require('./controllers/userController')
const categorieController = require('./controllers/categorieController')
const clientController = require('./controllers/clientController')
const orderController = require('./controllers/orderController')
const productController = require('./controllers/productController')



const app = express()
app.use(express.json())

app.use("/user", userController)

app.use("/categorie", categorieController)

app.use("/client", clientController)

app.use("/order", orderController)

app.use("/product", productController)

app.get("/user", (req, res) => {
    res.send(" hello api")
})
app.get("/categorie", (req, res) => {
    res.send(" hello api")
})
app.get("/client", (req, res) => {
    res.send(" hello api")
})
app.get("/order", (req, res) => {
    res.send(" hello api")
})
app.get("/product", (req, res) => {
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




