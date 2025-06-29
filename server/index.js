const express =require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();
 



const PORT= 5000;

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const entryRoutes = require('./routes/entries'); 
const aiRoutes =require('./routes/ai')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/entries', entryRoutes); 
app.use('/api/ai', aiRoutes);
app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`);
})