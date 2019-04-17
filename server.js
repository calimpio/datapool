
const app = require("./api/app");


const utils = require("./api/config/app");


app.listen(utils.config.host_port,()=>{
    
    console.log('Listen on port:'+utils.config.host_port);

    if(process.env.DEBUG)
    {
        console.log('api_key:'+utils.config.public_api_key);
    }   
    
});