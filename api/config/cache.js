const Node_Cache = require('node-cache');


const caches = {
    auth:{
        session: new Node_Cache({stdTTL: 100,checkperiod: 0})
    }
}


