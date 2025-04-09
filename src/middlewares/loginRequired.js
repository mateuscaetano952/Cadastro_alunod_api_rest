import Jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
    const { authorization } = req.headers;
   
    if(!authorization){
        return res.status('401').json({
            errors: ['Você precisa de login para acessar a página']
        });

    }

    const [text, token] = authorization.split(' ')
  
   try{
        const dados = Jwt.verify(token, process.env.TOKEN_SECRET)
        const { id, email} = dados;

        const user = User.findOne({
            where: {
                id,
                email            }
        });

        req.userId = id;
        req.userEmail = email;
        next();
   }catch(e){
    return res.status('401').json({
        errors: ['Token expirado ou invaldio']
    })
   }
}