require('./api/config/globals.js');
const fs = require('fs');
const utils = require('./api/config/app.js')

fs.writeFile('.env',
"PUBLIC_API_KEY="+utils.cryptr.encrypt("secret")+"\n"+
"HOST_PORT=8080\n"+
"DB_HOST=127.0.0.1\n"+
"DB_USER=root\n"+
"DB_PASSWORD=\n"+
"DB_DRIVER=mysql"+
"DB_PORT=3306\n"+
"DB_NAME=\n"+
"DEBUG=true"
);