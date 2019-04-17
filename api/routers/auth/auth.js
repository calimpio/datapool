require('module-alias/register');
const Resource = require('@lib/resource');
const User = require('@models/User');

const authRouter = Resource("tokenSession",{
    middle(req,res,next){            
        User.getByToken(req.tokenSession_id,'session',req.ip,'users',(user)=>{
            if(!user)return res(404);
            req.user = user;
            next();
        });        
    },
    update(req,res){
        const user = { 
            name:req.query.name,
            username:req.query.username,
            email:req.query.email,
            celphone:req.query.celphone,
        };
        if(user.name&&user.email&&user.username&&user.celphone){
            return User.findOne({username:user.username},{require:false}).then(function(u){
                if(!u || (u && u.id == req.user.id))return User.update(user,{id:req.user.id}).then(function(u){
                    return res.send({user:u});
                });
                return res.status(402).send();               
            });            
        }else return res.status(401).send();
    },
    show(req,res){
        return res.send({user:req.user});
    }

});





module.exports = authRouter;