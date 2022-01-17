
const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome:DataTypes.STRING,
      email:DataTypes.STRING,
      senha:DataTypes.STRING,
      telefone:DataTypes.STRING,
      banco:DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values:  ["A","I", "E"]
      },
    }, {
      sequelize
    });
  };


  static associate(models){
     this.belongsToMany(models.Permissoe, { foreignKey: 'usuario_id', through: 'usuarios_permissoes', as: 'permissoes' })
     this.hasMany(models.Rotas,{ foreignKey: 'usuario_id', as:'rotas' });
    }
 

}

module.exports = Usuario;



