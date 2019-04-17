const express = require("express");
/**
 * 
 * @param {string} name 
 * @param {object} params 
 * 
 * @returns {express.Router()}
 */
const Resource = function(name,params){
    let router = express.Router();

    router.use(`/:${name}_id`,function(req,res,next){
        req[`${name}_id`] = req.params[`${name}_id`];
        if(params.middle && typeof params.middle == 'function'){
            params.middle(req,(status,data)=>{
                return res.status(status).send(data);
            },()=>{
                return next();
            });
        }else next();
    });
    
    if(params.create && typeof params.create == 'function'){
        router.post('/',params.create);
    }

    if(params.show && typeof params.show == 'function'){
        router.get(`/:${name}_id`,params.show);
    }

    if(params.index && typeof params.index == 'function'){
        router.get('/',params.index);
    }

    if(params.update && typeof params.update == 'function'){
        router.put(`/:${name}_id`,params.update);
    }

    if(params.delete && typeof params.delete == 'function'){
        router.delete(`/:${name}_id`,params.delete);
    }

    return router;
}

module.exports = Resource;

