const express = require('express');
const app = express();
const Port = 5000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const postRoute=require('./routes/posts');

dotenv.config();

mongoose.connect(process.env.MONGO_URL,(err)=>{
    if(err){
        console.log(`mongo connection error : ${err}`);
    }
    else{
        console.log(`succesfilly connected to DB`);
    }
});

app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/posts',postRoute);

app.listen(Port, () => {
    console.log(`app running at Port : ${Port}`);
})