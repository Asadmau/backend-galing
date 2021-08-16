module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultValue: "test@email.com"
        },
        gender: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.INTEGER,
        }
    }, {
        freezeTableName: true,
        // engine:asadmau
    });
    return User;
}