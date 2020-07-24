const e = require("express");

const USER = require("../models/user.model").user;


const login = (req, res, next) => {
    USER.findOne({ email :req.body.email ,password :req.body.password}, function (err, response) {
        if (err) { res.status(404).send({ error: true, message: err }) }
        else {
            if(response == null){
                res.status(401).send({error:true , message : "No user Found"})
            }else{
                res.status(200).send({ error: false, user: response })
            }
        }
    })
}

const signup = (req, res, next) => {
    const userToSignup = new USER({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    userToSignup.save().then((doc, err) => {
        if (err) {
            console.log(err);
            res.status(400).send({ error: true, message: err })
        }
        else {
            res.status(200).send({ error: false, message: doc })
        }
    })
}


module.exports = {
    signup,
    login
}