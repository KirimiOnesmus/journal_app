const express = require('express');
const router = express.Router();
const db = require('../db/db'); 
const bcrypt = require('bcryptjs');

exports.getUserById= async(req,res)=>{
    const userId = req.params.id;

    try {
        const [result] =  await db.execute( 
            'SELECT id, fullName, userName, email, phone_number, bio, facebook_handle, instagram_handle, twitter_handle, tiktok_handle FROM users WHERE id = ?'
            , [userId]);
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
        // Build base SQL and values
        let sql = `
            UPDATE users 
            SET fullName = ?, 
                userName = ?, 
                email = ?, 
                phone_number = ?, 
                bio = ?,
                facebook_handle = ?, 
                instagram_handle = ?, 
                twitter_handle = ?, 
                tiktok_handle = ?`;

        const values = [
            fullName, userName, email, phone_number, bio,
            facebook_handle, instagram_handle, twitter_handle, tiktok_handle
        ];

        // Add password only if it's provided
        if (password && password.trim() !== '') {
            const hashedPassword = bcrypt.hashSync(password, 10);
            sql += `, password = ?`;
            values.push(hashedPassword);
        }

        sql += ` WHERE id = ?`;
        values.push(userId);

        const [result] = await db.execute(sql, values);

        res.status(200).json({
            message: 'Profile Updated Successfully'
        });
    } catch (error) {
        console.error('Error Updating User:', error);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }

}