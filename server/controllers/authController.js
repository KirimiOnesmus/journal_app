const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken');
const db = require ('../db/db');

exports.registerUser =async (req, res) => {
    const {
        fullName,
        userName,
        email,
        password
    } = req.body;

   try{
       const hashedPassword = bcrypt.hashSync(password, 10);

       const [existingUsers] =await db.execute(
        'SELECT * FROM users WHERE email = ? OR userName = ?',[email,userName]
       );
       if(existingUsers.length>0){
        return res.status(400).json({
            message:'Email or Username already in use'
        });
       }
           const [result] = await db.execute(
      'INSERT INTO users (fullName, userName, email, password) VALUES (?, ?, ?, ?)',
      [fullName, userName, email, hashedPassword]
    );

    res.status(201).json({
      message: 'User registered successfully',
      userId: result.insertId
    });
   }catch(error){
    console.error('Registration Error:',error);
    res.status(500).json({
        error:'Internal Server Error, Try Again.'
    });

   }

};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [result] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (result.length === 0) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const user = result[0];
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.json({
      message: 'Login Successful',
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        userName: user.userName,
        email: user.email,
        bio: user.bio,
        phone_number: user.phone_number,
        facebook_handle: user.facebook_handle,
        instagram_handle: user.instagram_handle,
        twitter_handle: user.twitter_handle,
        tiktok_handle: user.tiktok_handle,
        // profile_picture: user.profile_picture
      }
    });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};