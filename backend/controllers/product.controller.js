const productData = require('./../models/products.model').productData;
const express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    productData.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log("Error : " + JSON.stringify(err));
        }
    });
});

router.get("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    productData.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log(
                "Error in Retriving Employee :" + JSON.stringify(err, undefined, 2)
            );
        }
    });
});


router.put('/:id', (req, res) => {
    var emp = {
        name: req.body.name,
        description: req.body.position,
    };
    productData.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        //   console.log("jello");
        res.send(doc);
    });

});

router.post("/", (req, res) => {
    var emp = new productData({
        name: req.body.name,
        description: req.body.position,
        category: req.body.category
    });

    emp.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error : " + JSON.stringify(err));
        }
    });
});

router.delete("/:id", (req, res) => {

    productData.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
    });
});
module.exports = router;
