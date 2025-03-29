const {response} = require('express');
const ConvenorService = require("../services/convenor-service");

const convenorService = new ConvenorService();

const create = async (req,res)=>{
    try{
        const response = await convenorService.create({
            email:req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            clubId: req.body.clubId
        });
        return res.status(201).json({
            success:true,
            message:'Successfully created a new convenor',
            data: response,
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success : false,
            err: error
        });
    }
}


const signIn = async(req,res)=>{
    try {
        const response = await convenorService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully signed in'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success : false,
            err: error
        });
    }
}

const get = async (req,res)=>{
    try{
        const response = await convenorService.get(req.body.email);
        return res.status(201).json({
            success:true,
            message:'Successfully fetched a new user',
            data: response,
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success : false,
            err: error
        });
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await convenorService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'user is authenticated and token is valid'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports ={
    create,
    signIn,
    get,
    isAuthenticated
}