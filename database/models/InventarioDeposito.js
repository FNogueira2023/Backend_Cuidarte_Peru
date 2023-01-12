module.exports = (sequelize, dataTypes) => {
    let alias = 'InventarioDeposito';

    let cols = {
        ID_INVENTARIO_DEPOSITO: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        STOCK: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        timestamps: false,
        tableName: 'inventario_deposito'
    }

    const InventarioDeposito = sequelize.define(alias, cols, config);

    InventarioDeposito.associate = (models) => {
        InventarioDeposito.belongsTo(models.Deposito, {
            as: 'deposito',
            foreignKey: 'ID_DEPOSITO'
        });
        InventarioDeposito.belongsTo(models.Medicamento, {
            as: 'medicamento',
            foreignKey: 'INVENTARIO_ID_MEDICAMENTO'
        });


    }

    return InventarioDeposito;

}