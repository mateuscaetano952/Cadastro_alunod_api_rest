import Aluno from '../models/Aluno';

class AlunoController{
    async store(req, res){
        try{
            const aluno = await Aluno.create(req.body);
            return res.status(200).json({aluno})
        }catch(e){
            return res.status(400).json({
                errors: e.errors ? e.errors.map((err) => err.message) : e
            })
        }
    }

    async index(req, res){
        try{
            const alunos = await Aluno.findAll();
            return res.status(200).json(alunos);
        }catch(e){
            return res.status(400).json(null);
        }
    }

    async show(req, res){
        try{
            if(!req.params.id){
                return res.status(400).json({
                    errors: ['Id não enviado']
                })
            }

            const aluno = Aluno.findByPk(req.params.id);
            if(!aluno){
                return res.status(400).json({
                    errors: ['Aluno não existe']
                })
            }

            return res.status(200).json(aluno)
        }catch(e){
            return res.status(400).json({
                errors: e.errors ? e.errors.map((err) => err.message) : e
            })
        }
        
    }

    async update(req, res){
        try{
            if(!req.params.id){
                return res.status(400).json({
                    errors: ['ID não enviado']
                })
            }

            const aluno = await Aluno.findByPk(req.params.id);  
            if(!aluno){
                return res.status(400).json({
                  errors: ['Usuario não existe']
                })
              } 
              console.log("Update aluno::" + req.body)
              const {id, nome, sobrenome, idade} = await aluno.update(req.body);
              return res.status(200).json({id, nome, sobrenome, })

        }catch(e){
            return res.status(400).json({
                errors: e.errors ? e.errors.map((err) => err.message) : e
                })
        }
     }

    async delete(req, res){
        try{
            if(!req.params.id){
                return res.status(400).json({
                    errors: ['ID não enviado']
                })
            }

            const aluno = await Aluno.findByPk(req.params.id);  
            if(!aluno){
                return res.status(400).json({
                  errors: ['Usuario não existe']
                })
              } 
              
              aluno.destroy();
  
              return res.status(200).json({id, nome, sobrenome, })

        }catch(e){
            return res.status(400).json({
                errors: e.errors ? e.errors.map((err) => err.message) : e
                })
        }
    }
}

export default new AlunoController();