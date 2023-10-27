const express = require("express")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user.model');


const register = (req, res) =>{
    const {name, email, pass} = req.body
    try{
        bcrypt.hash(pass, 5, async(err, hash)=> {
            if(err){
                res.status(200).send({"Error":err.message})
            }else{
                const user = new UserModel({
                    name,
                    email,
                    pass:hash
                })
                await user.save()
                res.status(200).send({"msg":"A new user has been registerd", "user":user})
            }
        });
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
}
const login = async(req, res) =>{
    const {email, pass} =req.body
    try{
        const user = await UserModel.findOne({email})
        bcrypt.compare(pass, user.pass, (err, result)=> {
            if(result){
                const token = jwt.sign({name:user.name, userID:user.id},"masai")
                res.status(200).send({"msg":"Login Succesfull", "token":token})
            }else{
                res.status(400).send({"Error":err.message})
            }
        });
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
}
const logout = (req, res) =>{

}

module.exports={
    register,
    login,
    logout
}