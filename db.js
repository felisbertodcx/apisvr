const Sequelize = require('sequelize');

const sequelize = new Sequelize("banc10", "banc10", "Felis1993@", {
    host: 'banc10.mysql.uhserver.com',
    port: 3306,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("SUCESS - CONEXAO COM BANCO OK");
}).catch(function(){
    console.log("ERROR - CONEXAO COM BANCO");
})

module.exports = sequelize;
