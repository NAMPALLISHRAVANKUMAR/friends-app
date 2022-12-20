const {authAccessToken} = require('../utils/generateAccessToken');

async function authorization(req,res,next){
    const token=req.headers.authorization.split(' ')[1];
        try{
              if(!token){
                res.status(200).json({
                success:false,
                message:"Error!!! Token was not provided"
            })
            }

              const data=authAccessToken(token);
                req.body=data;
                next();}
        catch(e){
                res.send(e)
            }

}
module.exports=authorization