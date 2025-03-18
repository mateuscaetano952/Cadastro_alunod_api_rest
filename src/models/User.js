import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
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
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email já existe'
          },
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo email dever entre 3 a 255 caracteres',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [5, 50],
              msg: 'A senha deve ter 5 a 50 caracteres',
            },
          },
        },

      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (user) => {
      if(user.password){
        user.password_hash = bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
}
