require('module-alias/register')
const Model = require('./model');
const utils = require('@config/app');
const crypter = require('@config/bcryptr');

const Password = Model.extend({
    tableName:'passwords'
});

const Token = Model.extend({
    tableName:'tokens'
});

const Authenticable = Model.extend({
    /**
     * 
     * @param {string} password 
     * @param {(password:string)=>any} callback 
     */
    createPassword(password,callback){
        const type = this.tableName;
        Password.create({authenticable_id:this.id,authenticable_type:type,password:password}).then((n)=>{
            callback(n.get("password"));
        });
    },
    /**
     * 
     * @param {(password:string)=>any} callback 
     */
    verifyPassword(callback){
        const type = this.tableName;
        Password.findOne({authenticable_id:this.id,authenticable_type:type}).then((p)=>{
            callback(p.get("password"));
        });
    },
    /**
     * 
     * @param {string} verb 
     * @param {(e:Error,token:string)=>{}} callback 
     */
    createToken(verb,factor,callback){
        var token = utils.cryptr.encrypt(verb+"_"+(new Date().toUTCString()));
        var self = this;
        try{
            Token.findOne({factor:factor,verb:verb},{require:false}).then(function(t){
                if(t)return callback(null);
                Token.findOne({token:token,verb:verb},{require:false}).then(function(t){
                    if(t)return callback(null);
                    Token.create({token:token,verb:verb,factor:factor})
                    .then(function(){
                        return Token.findOne({token:token,verb:verb,factor:factor});
                    }).then(function(token){            
                        return Token.update({tokenable_type:self.tableName,tokenable_id:self.id},{id:token.id});
                        
                    }).then(function(token){
                        return callback(token.get('token'));
                    });
                });
                
            });
            
        }catch(e){
            return callback(e,null); 
        }
        
    }
        
},{
    /**
     * 
     * @param {string} token 
     * @param {string} verb 
     * @param {(row:{})} callback 
     */
    getByToken(token,verb,factor,as,callback){                      
        Token.findOne({factor:factor,verb:verb,token:token,tokenable_type:as},{require:false}).then((token)=>{
            if(token)return this.findById(token.get('tokenable_id')).then(callback);
            return callback(null);
        });
    }
});


module.exports = Authenticable;