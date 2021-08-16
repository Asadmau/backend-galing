module.exports = (sequelize, DataTypes) => {
    const Kategori = sequelize.define('kategori', {
        id_kategori: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrements: true
        },
        nama_kategori: DataTypes.STRING,
    }, {
        freezeTableName: true,
    });
    return Kategori;
}