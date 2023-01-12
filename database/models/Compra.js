module.exports = (sequelize, dataTypes) => {
    let alias = 'Compra';

    let cols = {
        ID_COMPRA: {
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

    const Compra = sequelize.define(alias, cols, config);

    Compra.associate = (models) => {
        Compra.belongsTo(models.Proveedor, {
            as: 'proveedor',
            foreignKey: 'ID_PROVEEDOR'
        });
        Compra.belongsTo(models.Empleado, {
            as: 'empleado',
            foreignKey: 'ID_EMPLEADO'
        });
        Compra.hasMany(models.DetalleCompra, {
            as: 'detalleCompras',
            foreignKey: 'DETALLE_COMPRA_ID_COMPRA'
        })
    }


    return Compra;

}