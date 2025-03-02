require('dotenv').config()

module.exports = {
    dialect: 'mariadb',
    host:
    port:
    username:
    password:
    database:
    dafine: {
        timestamps: true,
        underscored: true,
        underscoreAll: true,
        'createAt': 'created_at',
        'updateAt': 'update_at'
    },
    dialectOptions: {
        timezone: 'America/Sao_Paulo'
    },
    timezone: 'America/Sao_Paulo'
}