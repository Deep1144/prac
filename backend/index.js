const express = require('express')
const app = express()
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/prac');
var routes = require('./controllers/product.controller');

const port = 3000

const authController = require("./controllers/auth.controller"); 
const categoryController = require("./controllers/category.controller");

app.use(cors({}));
app.use(bodyparser.json());
app.get('/', (req, res) => res.send('Hello World!'))


app.post('/signup' , authController.signup);
app.post('/login' , authController.login);
app.post('/addcategory' , categoryController.addcategory);
app.get("/getCategory" , categoryController.getCategory);
app.use('/products' ,routes)



app.listen(port, () => console.log(`Example app listening on port port!`))