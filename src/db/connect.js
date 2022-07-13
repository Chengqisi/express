var Sequelize = require('sequelize')
var db = new Sequelize('cheese', 'cheese_main', 'cheese_main', {
    host: 'cheese.mysql.rds.aliyuncs.com',
    port: "3306",
    dialect: "mysql"
})
var test = (function () {
    try {
        db.authenticate();
        console.log('数据库连接成功。。。');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()
// new test()

// var userModel = db.define('user_info', {
//     username: Sequelize.STRING,
//     password: Sequelize.STRING,
//     sex: Sequelize.STRING,
//     address: Sequelize.STRING
// }, {
//     timestamps: false,
//     freezeTableName: true
// })
// module.exports = {
//     userModel
// }