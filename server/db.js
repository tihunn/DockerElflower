const {Sequelize} = require('sequelize')
// require('dotenv').config()
//
// config = {
//     development: {
//         url: process.env.DATABASE_URL,
//         dialect: 'postgres'
//     },
//     test: {
//         url: process.env.DATABASE_URL,
//         dialect: 'postgres'
//     },
//     production: {
//         url: process.env.DATABASE_URL,
//         dialect: 'postgres'
//     }
// }
//
// module.exports = new Sequelize(config[process.env.NODE_ENV])
module.exports = new Sequelize(process.env.DATABASE_URL)

// module.exports = new Sequelize(
//     "elflower", // Название БД
//     "elflower", // Пользователь
//     "superUser", // ПАРОЛЬ
//     {
//         dialect: 'postgres',
//         host: "localhost",
//         port: 5432
//     }
// )