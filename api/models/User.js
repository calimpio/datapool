require('module-alias')
const Authenticable = require('@lib/authenticable');
const Company = require('@models/Company');

const User = Authenticable.extend({
    tableName:'users',    
    companiesAsEmployee(){
        return this.belongsToMany(Company,"employees");
    },
    
});

module.exports = User;