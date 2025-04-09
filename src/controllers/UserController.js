import { json } from 'sequelize';
import User from '../models/User';

class HomeController {
  //Criar novo usuario
  async store(req, res) {
   try{
    const {id, nome, email}= await User.create(req.body);
      return res.json({id, nome, email});
   }catch(e){
    return res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : e
    })
   }
  }

  //Lista todos os usuarios
  async home(req, res) {
    try{
      const users = await User.findAll({ attributes: ['nome', 'email' , 'id']});
      return res.json(users);
    }catch(e){
      return res.json(null);
    }
  }

  //Lista 1 usuario aparti do id
  async show(req, res) {
    try{
      if(!req.params.id){
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }
  
      const user = await User.findByPk(req.params.id)  
      if(!user){
        return res.status(400).json({
          errors: ['Usuario não existe']
        })
      } 

      const {id, nome, email} = user
  
      return res.status(200).json({id, nome, email})
    }catch(e){
      return res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : e
      })
    }
  }

  async update(req, res){
    try{
      if(!req.userId ){
        return res.status(400).json({
          errors: ['Id não enviado']
        })
      }
  
      const user = await User.findByPk(req.userId )  
      if(!user){
        return res.status(400).json({
          errors: ['Usuario não existe']
        })
      } 
      
      const {id, nome, email} = await user.update(req.body);

      

      return res.status(200).json({id, nome, email})
    }catch(e){
      return res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : e
      })
    }
  }

  async delete(req, res){
    try{
      if(!req.userId ){
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }
  
      const user = await User.findByPk(req.userId )  
      if(!user){
        return res.status(400).json({
          errors: ['Usuario não existe']
        })
      } 

      user.destroy();
  
      return res.status(200).json(user)
    }catch(e){
      return res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : e
      })
    }
  }
}


export default new HomeController();
