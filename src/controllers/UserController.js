import User from '../models/User';

class HomeController {
  async index(req, res) {
   try{
    console.log('User route::' + req.body)
    const novoUser= await User.create(req.body);
      res.json(novoALuno);
   }catch(e){
    res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : e
    })
   }
  }
}

export default new HomeController();
