module.exports = (sequelize, dataTypes) => {
    let alias = 'Empleado';

    let cols = {
        ID_EMPLEADO: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        NOMBRE: {
            type: dataTypes.STRING
        },
        APELLIDO: {
            type: dataTypes.STRING
        },
        CELULAR: {
            type: dataTypes.STRING
        },
        EMAIL: {
            type: dataTypes.STRING
        },
        PASSWORD: {
            type: dataTypes.STRING
        }
    }

    let config = {
        timestamps: false,
        tableName: 'empleado'
    }

    const Empleado = sequelize.define(alias, cols, config);

    Empleado.associate = (models) => {
        Empleado.hasMany(models.Compra, {
            as: 'compras',
            foreignKey: 'ID_EMPLEADO'
        });
        Empleado.hasMany(models.Venta, {
            as: 'ventas',
            foreignKey: 'VENTA_ID_EMPLEADO'
        });
    }

    return Empleado;

}