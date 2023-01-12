module.exports = (sequelize, dataTypes) => {
    let alias = 'Medicamento';

    let cols = {
        ID: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        NOMBRE: {
            type: dataTypes.STRING
        },
        FECHA_REGISTRADO: {
            type: dataTypes.DATE
        },
        FECHA_VENCIMIENTO: {
            type: dataTypes.DATE
        },
        DESCRIPCION: {
            type: dataTypes.STRING
        },
        IMAGEN: {
            type: dataTypes.STRING
        }

    }

    let config = {
        timestamps: false,
        tableName: 'medicamento'
    }

    const Medicamento = sequelize.define(alias, cols, config);

    Medicamento.associate = (models) => {
        Medicamento.hasOne(models.DetalleCompra, {
            as: 'detalleCompra',
            foreignKey: 'DETALLE_COMPRA_ID_MEDICAMENTO'
        });
        Medicamento.hasOne(models.DetalleVenta, {
            as: 'detalleVenta',
            foreignKey: 'DETALLE_VENTA_ID_MEDICAMENTO'
        });
        Medicamento.hasOne(models.InventarioDeposito, {
            as: 'inventarioDeposito',
            foreignKey: 'INVENTARIO_ID_MEDICAMENTO'
        })

    }

    return Medicamento;

}