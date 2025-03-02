require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
    createAt: 'created_at',
    updateAt: 'update_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
