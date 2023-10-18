require('dotenv').config();

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME,
    },
}

module.exports = config;