require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    db: {
        port: process.env.DB_PORT || 27017,
        user: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME || 'test',
    }
}

module.exports = config;
