const EmbeddedCodeModel = require("../models/EmbeddedCode");
const RegisteredUsers = require("../models/RegisteredUsers");

const getCode = async (req, res) => {
    try{
        const data = await EmbeddedCodeModel.findAll();
        return res.json({message: 'success', data: data});
    }catch(err){
        return res.json({message: 'error', data: err.message});
    }
};

const registerUser = async (req,res) => {
    try{
        const data = await RegisteredUsers.create({
            registerEmail: req.body.email
        });
        return res.json({message: 'success', data: data});
    }catch(err){
        return res.json({message: 'error', data: err.message});
    }
};

const login = async (req, res) => {
    try{
        const data = await RegisteredUsers.findAll({
            where: { 
                registerEmail: req.body.email
            }
        });
        return res.json({message: 'success', data: data});
    }catch(err){
        return res.json({message: 'error', data: err.message});
    }
};

module.exports = {
    getCode,
    registerUser,
    login
}