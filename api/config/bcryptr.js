const bcryptstd = require('bcrypt');
const saltRounds = 10;

const bcrypt = {
    hash(data,callback){
        bcryptstd.hash(data,saltRounds,callback);
    },
    compare(data,hash,callback){
        bcryptstd.compare(data,hash,callback);
    }
};

module.exports = bcrypt;