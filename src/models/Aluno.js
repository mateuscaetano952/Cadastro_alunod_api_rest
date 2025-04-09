import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome debe ter entre 3 a 255 caracteres',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo sobrenome debe ter entre 3 a 255 caracteres',
            },
          },
        },
        email: {
                  type:Sequelize.STRING,
                  unique: {
                    args:true,
                    msg: 'Email address already in use!'
                },
                  validate:{
                      notEmpty:{
                          args:true,
                          msg:"Email é necessario"
                      },
                      isEmail:{
                          args:true,
                          msg:'Este não é um email valido'
                      }
                  },
                },
        idade: {
          type: Sequelize.INTEGER
        }
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
