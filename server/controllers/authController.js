const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken');
const db = require ('../db/db');

exports.registerUser = (req, res) => {
    const {
        fullName,
        userName,
        email,
        password
    } = req.body;

   
    const hashedPassword = bcrypt.hashSync(password, 10);

    
    const checkSql = 'SELECT * FROM users WHERE email = ? OR userName = ?';
    db.query(checkSql, [email, userName], (checkErr, result) => {
        if (checkErr) {
            console.error(checkErr);
            return res.status(500).json({ error: 'Database check error' });
        }

        if (result.length > 0) {
            return res.status(400).json({ message: 'Email or Username already in use' });
        }

       
        const insertSql = 'INSERT INTO users (fullName, userName, email, password) VALUES (?, ?, ?, ?)';
        db.query(insertSql, [fullName, userName, email, hashedPassword], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database insert error' });
            }

            
            res.status(201).json({
                message: 'User registered successfully',
                userId: result.insertId 
            });
        });
    });
};

exports.loginUser = (req,res)=>{
    const{email,password} = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    
    db.query(sql,[email],(err,result)=>{
        if(err) return res.status(500).json({error:err});

        if(result.length === 0) return res.status(400).json({message: 'User Not Found !'});

        const user = result[0];

        const isMatch = bcrypt.compareSync(password, user.password);

        if(!isMatch) return res.status(401).json({message:'Invalid Password'});

        const token = jwt.sign({id:user.id},process.env.SECRET_KEY,{expiresIn:60});

        res.json({message:'Login Successful',token});
    })
}