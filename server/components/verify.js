const jwt =require ('jsonwebtoken');

module.exports= function (req,res,next){
    const token =req.header('auth-token');
    if(!token) return res.status(401).send(`log in again to continue`);
    
    try {
        const authenticated =jwt.verify(token,process.env.TOKEN_SECRET);
        req.user=authenticated;
    } catch (error) {
        res.status(400).send('invalid token');
    }
    next();
}