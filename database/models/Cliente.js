module.exports = (sequelize, dataTypes) => {
    let alias = 'Cliente';

    let cols = {
        ID_CLIENTE: {
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
        tableName: 'cliente'
    }

    const Cliente = sequelize.define(alias, cols, config);

    Cliente.associate = (models) => {
        Cliente.hasMany(models.Venta, {
            as: 'compras',
            foreignKey: 'VENTA_ID_CLIENTE'
        })
    }

    return Cliente;

}