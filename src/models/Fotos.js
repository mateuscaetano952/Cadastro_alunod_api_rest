import Sequelize, { Model } from 'sequelize';

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
