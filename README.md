# Datapool

- ## Commands
    - ### install node modules
        - `$ npm install`
    - ### migrations:        
        -  migrate up:  `$ knex migrate:latest`
        -  migrate down:  `$ knex migrate:rollback`
    - ### server:
        - generate a new env with api key: `$ npm run gen`
        - run server: `$ npm run start`

- ## API Defaults Routes:
    [x] Create user: `POST /api/:key/user?name,username,password,email,celphone` 

    [x] Login user: `POST /api/:key/user/login?username,password`

    [x] Update user: `PUT /api/:key/auth/:token?name,username,password,email,celphone`

    [x] Show user: `GET /api/:key/auth/:token`


- ## Tools

- node_modules:
    - For routing: [express.js](http://expressjs.com/es/api.html)
    - For database migrations: [knex](https://knexjs.org/#Migrations)
    - For models: [bookshelf](https://bookshelfjs.org/tutorials.html) And [bookshelf-modelbase](https://github.com/bsiddiqui/bookshelf-modelbase#usage)

- datapool libs:
    - Resource: Is a function with  a 5 methods routes that would be define 
        - `index`:GET `/` (request,response)=>response
        - `create`: POST `/` (request,response)=>response
        - `show`:GET `/:name_id` (request,response)=>response
        - `update`: PUT `/:name_id` (request,response)=>response
        - `delete`:DELETE `/:name_id` (request,response)=>response

        - Middlewares:
            - `middle` : `/:name_id`

        - Usage:

        ```javascript
            require('module-alias/register')
            const Flight = require('@mdoels/Flight');
            const Resource = require('@lib/resource');

            const FlightsRouter = Resource("flight",{
                middle(req,res,next){
                    Fligth.findById(req.flight_id,{require:false})
                    .then(function(flight){
                        if(!flight)return res(404);
                        req.flight = flight;
                        next();
                    });
                }                
                create:function(req,res){
                    //...
                    try{
                        return Flight.create(req.query).then(function(f){
                        return res.send({flight_id:f.id});                        
                        });
                    }catch(){
                        return res.status(400).send();
                    }                    
                },
                show:function(req,res){
                    //...
                    return res.send(req.flight);
                },
                update:function(req,res){
                    //...
                    const qry = req.query;
                    !qry.flytime && !qry.desteny?return res.status(404);
                    :return ()=>{
                        req.flight.set("fly_time",qry.flytime);
                        req.flight.set("deteny",qry.desteny);
                        return res.send({flight_id:req.flight.id});
                    };                    
                },                
            });
        ```

    


