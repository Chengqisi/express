var Sequelize = require('sequelize')
var db = new Sequelize('cheese', 'cheese_main', 'cheese_main', {
    host: 'cheese.mysql.rds.aliyuncs.com',
    port: "3306",
    dialect: "mysql"
})
var StudentModel = db.define('students', {
    name: Sequelize.STRING,
    age: Sequelize.STRING,
    class: Sequelize.STRING,
    phone: Sequelize.STRING,
    address: Sequelize.STRING,
    sex: Sequelize.STRING
}, {
    timestamps: false,
    freezeTableName: true
})
module.exports = {
    StudentModel
}