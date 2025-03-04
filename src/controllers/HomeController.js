import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoALuno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Fernadez',
      email: 'Maria@gmail.com',
      idade: 23,
    });
    res.json(novoALuno);
  }
}

export default new HomeController();
