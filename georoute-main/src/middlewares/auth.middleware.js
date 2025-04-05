const authServices= require('../services/auth.services')

const checkAuth=async(req,res,next)=>{
    try{
        const token= req.headers["authorization"];      
        if(token)
        {
            const stId=req.query.stId
            if(!stId){
                req.query.stId=req.headers["client-id"]
            }  
            next() 
            // const responseLogin=await authServices.verifyToken(token)
            // console.log(responseLogin);
            // if(responseLogin.status===200)
            // {
            //     next();
                
            // }else{
            //     res.status(401).json({message:'Usuario no autorizado'})
            //     return null
            // }
        }
        else{
            res.status(401).json({message:'Usuario no autorizado'})
        }
        
    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
}

const checkAdmin=async(req,res,next)=>{
    try{
        const token= req.headers["authorization"];
        if(token)
        {
            if(token==='Bearer')
                next();
            // const responseLogin=await authServices.verifyToken(token)
            // if(responseLogin.status!==200)
            // {
            //     res.status(401).json({message:'Usuario no autorizado'})
            //     return null
            // }
            // const responsePeople=await authServices.getPeople(responseLogin.data.access_token,req.headers["client-id"],'id')
            // if(responsePeople.status!==200)
            // {
            //     res.status(401).json({message:'Usuario no autorizado'})
            //     return null
            // }
            // if(responsePeople.data.roles.find(role=>role.name==='admin'))
            // {
            //     next();
            // }
            // else{
            //     res.status(401).json({message:'Usuario no autorizado'})
            // }
        }
        else{
            res.status(401).json({message:'Usuario no autorizado'})
        }
        
    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
}
module.exports={checkAuth,checkAdmin}