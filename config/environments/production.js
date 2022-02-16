module.exports = {
    PORT: process.env.PORT,
    DB: {
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DATABASE: process.env.DB_DATABASE,
        HOST: process.env.DB_HOST,
        DIALECT: process.env.DB_DIALECT,
    }
}