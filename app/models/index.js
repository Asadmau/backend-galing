const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require('../../config/db.config');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password,{
    host: dbConfig.dbhost,
    dialect: 'mysql',
    logging:false,
    pool: {
        max:5, min:0, idle:10000,
    }
});
try {
    sequelize.authenticate().then(() => {
        console.log('Connected Success Full');
    });
} catch (error) {
    console.error('Error Contted', Error);
}
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false, }).then(() => {
    //jika true data akan terganti
    console.log('sync Success');
});

// db.user
db.user = require('./user.model')(sequelize, DataTypes);
db.kategori = require('./kategori.model')(sequelize, DataTypes);
db.satuan = require('./satuan.model')(sequelize, DataTypes);

module.exports = db;