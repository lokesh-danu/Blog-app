const router =require('express').Router();
const User=require('../models/User');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');
//register
router.post('/register',async (req,res)=>{

    const salt =await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password,salt);
    const user =new User({
        name : req.body.name,
        password : hash,
        email : req.body.email
    });
    try{
        
        const saved=await user.save();
        res.status(200).send(`User ${user._id} registered succesfully`);
    }
    catch(error){
        res.status(400).send(error);
    }
});

//login
router.post('/login', async (req,res) => {
    
    // const {error,value}=loginValidation(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    try{
        const user =await User.findOne({email :req.body.email});
        if(!user) return res.status(400).send("email not registered");
        
        const checkPass =await bcrypt.compare(req.body.password, user.password);
        if(!checkPass) return res.status(400).send(`incorrect password`);
        
        const token =jwt.sign({_id:user._id,name:user.name},process.env.TOKEN_SECRET,{expiresIn:'7d'});
        res.status(200).json({
            token :token,
            id:user._id,
            name:user.name
        })

    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports=router;