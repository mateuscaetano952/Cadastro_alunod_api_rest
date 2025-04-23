import { json } from 'sequelize';
import User from '../models/User';
import Jwt from 'jsonwebtoken';

/**
 * Retorna um token necessario para acessar certas rotas na aplicação
 */

class HomeController {
  async store(req, res) {
   const {email = '', password = ''} = req.body;

    if(!email || !password){
        res.status(400).json({
            "errors": "Credenciais invalidas"
        })
    }

    const user = await User.findOne({ where: {email}});

    if(!user){
        return res.status(400).json({
            "errors":"Usuario não encontrado"
        })
    }

    if(!(await user.passwordIsValid(password)))
        return res.status(400).json({
            "errors":"Senha errada"
        })   

    const { id } = user;
    const token = Jwt.sign({ id, email }, process.env.TOKEN_SECRET);

    return res.json(token);
  }
}


export default new HomeController();
