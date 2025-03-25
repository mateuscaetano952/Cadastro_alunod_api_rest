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
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [4, 50],
              msg: 'A senha deve ter 6 a 50 caracteres',
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
        user.password_hash = await bcrypt.hash(user.password, 8);
        console.log("addHook from User model" + user.password_hash)
      }
    });

    return this;
  }

  async passwordIsValid(password){
    return await bcrypt.compare(password, this.password_hash);
  }
}
