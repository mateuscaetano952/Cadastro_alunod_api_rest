import Sequelize, { Model } from 'sequelize';
import httpConfig from '../config/httpConfig';

export default class Fotos extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode estar vazio',
            },
          },
        },
        filename: {
            type: Sequelize.STRING,
            defaultValue: '',
            validate: {
              notEmpty: {
                msg: 'Campo não pode estar vazio',
              },
            },
          },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
              return `${httpConfig.url}/images/${this.getDataValue('filename')}`;
        }
      }

      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' })
}
}
