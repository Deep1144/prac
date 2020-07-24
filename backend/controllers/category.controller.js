const { category } = require("../models/category.model");
const { response } = require("express");

const CATEGORY = require("../models/category.model").category;

const addcategory = (req, res, next) => {
    const newcategory = new CATEGORY({
        name: req.body.name,
        parent: req.body.parent
    })

    newcategory.save().then((doc, err) => {
        if (err) {
            console.log(err);
            res.status(400).send({ error: true, message: err })
        }
        else {
            res.status(200).send({ error: false, message: doc })
        }
    })
}


const getCategory = (req, res, next) => {
    category.find().select("_id name parent").then(response => { res.send(response) },
        (err) => {
            res.status(400).send({error: true, message : "Error in fetching"})
        }
    )
}


module.exports = {
    addcategory,
    getCategory
}