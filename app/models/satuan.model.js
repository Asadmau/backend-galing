module.exports = (sequelize, DataTypes) => {
    const Satuan = sequelize.define('satuan', {
        id_satuan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrements: true,
        },
        nama_satuan: {
            type:DataTypes.STRING,
        }
    }, { freezeTableName: true });
    return Satuan;
}