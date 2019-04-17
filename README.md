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
            const Resource = require('@lib/resource');
            const FligthsRouter = Resource("flight",{
                index:function(req,res){
                    //...
                },
                create:function(req,res){
                    //...
                },
                show:function(req,res){
                    //...
                },
                update:function(req,res){
                    //...
                },
                delete:function(req,res){
                    //...
                },
            });
        ```

    


