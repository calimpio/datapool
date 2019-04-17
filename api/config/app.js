const Cryptr =  require('cryptr');
const cryptr = new Cryptr('TotalSecret');


require('custom-env').env();

const utils = {
    config:{
        public_api_key:process.env.PUBLIC_API_KEY || "secret",
        host_port: process.env.HOST_PORT || 8080,
        public_key: cryptr.encrypt('secret')
    },
    
    //MODULES:    
    cryptr: cryptr,    
    
};

module.exports = utils;
