module.exports = (sequelize, dataTypes) => {
    let alias = 'Venta';

    let cols = {
        ID_VENTA: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        FECHA: {
            type: dataTypes.DATE
        }
    }

    let config = {
        timestamps: false,
        tableName: 'compra'
    }

    const Venta = sequelize.define(alias, cols, config);

    Venta.associate = (models) => {
        Venta.belongsTo(models.Empleado, {
            as: 'empleado',
            foreignKey: 'VENTA_ID_EMPLEADO'
        });
        Venta.belongsTo(models.Cliente, {
            as: 'cliente',
            foreignKey: 'VENTA_ID_CLIENTE'
        });
        Venta.hasMany(models.DetalleVenta, {
            as: 'detalleVentas',
            foreignKey: 'DETALLE_VENTA_ID_VENTA'
        })
    }

    return Venta;

}