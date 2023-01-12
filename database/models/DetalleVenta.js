module.exports = (sequelize, dataTypes) => {
    let alias = 'DetalleVenta';

    let cols = {
        ID_DETALLE_VENTA: {
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

    const DetalleVenta = sequelize.define(alias, cols, config);

    DetalleVenta.associate = (models) => {
        DetalleVenta.belongsTo(models.Venta, {
            as: 'venta',
            foreignKey: 'DETALLE_VENTA_ID_VENTA'
        });
        DetalleVenta.belongsTo(models.Medicamento, {
            as: 'medicamento',
            foreignKey: 'DETALLE_VENTA_ID_MEDICAMENTO'
        })
    }

    return DetalleVenta;

}