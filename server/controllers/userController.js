const express = require('express');
const router = express.Router();
const db = require('../db/db'); 
const bcrypt = require('bcryptjs');

exports.getUserById= async(req,res)=>{
    const userId = req.params.id;

    try {
        const [result] =  await db.execute('SELECT * FROM users WHERE id = ?', [userId]);
        if(result.length === 0){
            return res.status(404).json({
                message:'user Not Found'
            });
        }
        res.status(200).json(result[0]);

    } catch (error) {
        console.error('Error Fetching User:',error);
        res.status(500).json({error:'Internal Server Error'});
    }
}

exports.updateUser = async(req,res)=>{
    const userId = req.params.id;


    let{
        fullName,
        userName,
        email,
        phone_number,
        password,
        bio,
        facebook_handle,
        instagram_handle,
        twitter_handle,
        tiktok_handle
    }=req.body;

    try {
        
        if(password){
            password= bcrypt.hashSync(password,10);
        }
        const sql = `UPDATE users 
            SET fullName=?, 
            userName=?, 
            email=?, 
            phone_number=?, 
            password=?, 
            bio=?,
            facebook_handle=?, 
            instagram_handle=?, 
            twitter_handle=?, 
            tiktok_handle=? 
        WHERE id = ?
            `;
            const [result] = await db.execute(sql,[
                fullName, userName, email, phone_number, password, bio, facebook_handle, instagram_handle, twitter_handle, tiktok_handle, userId
            ]);
            res.status(200).json({
                message:'Profile Updated Successfully'
            });
    } catch (error) {
        console.error('Error Updating User:', error);
        res.status(500).json({
            message:'Internal Server Error'
        });
       
    }

}