import { json } from 'sequelize';
import User from '../models/User';

class HomeController {
  async store(req, res) {
   try{
    const novoUser= await User.create(req.body);
      return res.json(novoALuno);
   }catch(e){
    res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : e
    })
   }
  }

  async home(req, res) {
    try{
      const users = await User.findAll();
      return res.json(users);
    }catch(e){
      return res.json(null);
    }
  }

  async show(req, res) {
    try{
      if(!req.params.id){
        res.status(400).json({
          errors: ['ID não enviado']
        })
      }
  
      const user = await User.findByPk(req.params.id)  
      if(!user){
        res.status(400).json({
          errors: ['Usuario não existe']
        })
      } 
  
      return res.status(200).json(user)
    }catch(e){
      res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : e
      })
    }
  }

  async update(req, res){
    try{
      if(!req.params.id){
        res.status(400).json({
          errors: ['ID não enviado']
        })
      }
  
      const user = await User.findByPk(req.params.id)  
      if(!user){
        res.status(400).json({
          errors: ['Usuario não existe']
        })
      } 
      
      const novosDados = await user.update(req.body);

      

      return res.status(200).json(novosDados)
    }catch(e){
      res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : e
      })
    }
  }

  async delete(req, res){
    try{
      if(!req.params.id){
        res.status(400).json({
          errors: ['ID não enviado']
        })
      }
  
      const user = await User.findByPk(req.params.id)  
      if(!user){
        res.status(400).json({
          errors: ['Usuario não existe']
        })
      } 

      user.destroy();
  
      return res.status(200).json(user)
    }catch(e){
      res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : e
      })
    }
  }
}


export default new HomeController();
