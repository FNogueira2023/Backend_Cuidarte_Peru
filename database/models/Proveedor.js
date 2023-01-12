module.exports = (sequelize, dataTypes) => {
    let alias = 'Proveedor';

    let cols = {
        ID_PROVEEDOR: {
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
        }
    }

    let config = {
        timestamps: false,
        tableName: 'proveedor'
    }

    const Proveedor = sequelize.define(alias, cols, config);


    Proveedor.associate =  (models) => {
        Proveedor.hasMany(models.Compra, {
            as: 'compras',
            foreignKey: 'ID_PROVEEDOR'
        });


    }


    return Proveedor;

}