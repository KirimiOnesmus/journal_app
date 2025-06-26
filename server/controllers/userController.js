const express = require('express');
const router = express.Router();
const db = require('../db/db'); 

exports.getUserById=(req,res)=>{
    const userId = req.params.id;

    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql,[userId],(err,result)=>{
        if(err) return res.status(500).json({error: "Error Fetching User"});
        if(result.length===0) return res.status(404).json({message:"User not found"});

        res.status(200).json(result[0]);
    })
}

exports.updateUser = (req,res)=>{
    const userId = req.params.id;

    const{
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
    
    db.query(sql,[
          fullName, userName, email, phone_number, password, bio, facebook_handle, instagram_handle, twitter_handle, tiktok_handle, userId
    ],(err,result)=>{
          if (err) {
                console.error(err); // This will help debug on server logs
                return res.status(500).json({ error: 'Error updating user' });
            }
        res.status(200).json({message:"Profile updated successfully"});
    })
}