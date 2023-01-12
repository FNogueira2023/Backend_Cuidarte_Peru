module.exports = (sequelize, dataTypes) => {
    let alias = 'Deposito';

    let cols = {
        ID_DEPOSITO: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }

    let config = {
        timestamps: false,
        tableName: 'deposito'
    }

    const Deposito = sequelize.define(alias, cols, config);

    Deposito.associate = (models) => {
        Deposito.hasOne(models.InventarioDeposito, {
            as: 'inventarioDeposito',
            foreignKey: 'ID_DEPOSITO'
        });
    }

    return Deposito;

}