const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userDetails')

require('dotenv').config();

exports.signUp = async (req, res) => {
    try{
        const {firstName, lastName, email, phoneNumber, password} = req.body;

        if(!firstName || !lastName || !email || !phoneNumber || !password){
            return res.status(400).json({
                success: false,
                message: "Enter All the fields"
            })
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(401).json({
                success: false,
                message: "User Already Exists"
            })
        }

        let hashedPassword;
        let saltRound = 10;
        try{
            hashedPassword = await bcrypt.hash(password, saltRound)
        } catch (error) {
            return res.status(402).json({
                success: false,
                message: "Error in Hashing Password"
            })
        }

        const user = await User.create({
            name:{
                firstName,
                lastName
            },
            email,
            phoneNumber,
            password: hashedPassword,
        })
        return res.status(200).json({
            success: true,
            data: user,
            message: "User Entered Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered, try again later"
        });
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Enter All Details.."
            })
        }

        let existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(401).json({
                success: false,
                message: "No User Exists"
            })
        }

        const payload = {
            name: existingUser.name,
            email: existingUser.email,
            phoneNumber: existingUser.phoneNumber,
            id: existingUser._id,
        }

        if(await bcrypt.compare(password, existingUser.password)){
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '2h'
            });
            existingUser = existingUser.toObject();
            existingUser.token = token
            existingUser.password = undefined
            const options = {
                expire: new Date(Date.now()*3*24*60**60*1000),
                httpOnly: true
            }
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                existingUser,
                message:"Logged In Successfully"
            })
        } else {
            return res.status(403).json({
                success: false,
                message: "Incorrect Password"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Error"
        })
    }
}