module.exports = (sequelize, dataTypes) => {
    let alias = 'DetalleCompra';

    let cols = {
        ID_DETALLE_COMPRA: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        PRECIO: {
            type: dataTypes.FLOAT
        },
        CANTIDAD: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        timestamps: false,
        tableName: 'detalle_compra'
    }

    const DetalleCompra = sequelize.define(alias, cols, config);

    DetalleCompra.associate = (models) => {
        DetalleCompra.belongsTo(models.Compra, {
            as: 'compra',
            foreignKey: 'DETALLE_COMPRA_ID_COMPRA'
        });
        DetalleCompra.belongsTo(models.Medicamento, {
            as: 'medicamento',
            foreignKey: 'DETALLE_COMPRA_ID_MEDICAMENTO'
        });

    }

    return DetalleCompra;

}