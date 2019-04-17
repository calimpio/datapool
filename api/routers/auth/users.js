require('module-alias/register');
const Resource = require('@lib/resource');
const User = require('@models/User');
const crypter = require('@config/bcryptr');

const usersRouter = Resource("user",{    
    create(req,res){
        const user = req.query;
        
        if(user.name&&user.email&&user.password&&user.username&&user.celphone){            
            return User.findOne({username:user.username},{require:false}).then(function(u){
                if(u)return res.status(404).send();
                return User.create({
                    name:user.name,
                    email:user.email,
                    username:user.username,
                    celphone:user.celphone
                }).then((u)=>{                               
                    if(u){
                        crypter.hash(user.password,(e,ep)=>{                    
                            u.createPassword(ep,(p)=>{
                                if(p)return res.status(201).send({user_id:u.id});
                                return res.status(500).send();
                            });
                        }); 
                    }                      
                });   
            });               
                
        }else return res.status(401).send();
    },    
});

usersRouter.post('/login',function(req,res){
    const user_q = req.query;
    if(!user_q.username || !user_q.password)return res.status(400).send();
    return User.findOne({username:user_q.username},{require:false}).then(function(user){
        if(!user)return res.status(401).send();
        user.verifyPassword((pd)=>{            
            if(!pd)return res.status(402).send();
            crypter.compare(user_q.password,pd,(e,s)=>{                              
                if(s){
                    user.createToken('session',req.ip,(token)=>{
                        if(token)return res.send({session_token:token});
                        return res.status(404).send();
                    });
                }else
                return res.status(403).send();
            });
        });
    });
});

module.exports = usersRouter;