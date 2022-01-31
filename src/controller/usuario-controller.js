'use strict';
 const Usuario = require('../models/Usuario');
 const ValidationContract = require("../validator/fluent-validators");
 const authService = require('../services/auth-services');
 const md5 = require('md5');
module.exports = {
async store(req,res){
         
            try{
            const {nome,senha,email,telefone,banco} = req.body;
            const usuarioExist = await Usuario.findOne({where:{email:email}});
            let contract = new ValidationContract();
            contract.isRequired(nome, 'nome', 'O Nome é obrigatorio');
            contract.isRequired(senha, 'senha', 'A senha é obrigatorio');
            contract.isRequired(email, 'email', 'O email é obrigatorio');
            contract.isEmail(email, 'email', 'O email é Invalido');
            contract.isRequired(banco, 'banco', 'O banco é obrigatorio');
            contract.isValue(usuarioExist, 'email', 'O email é já existe');
            // Se os dados forem inválidos
            if (!contract.isValid()) {
                return res.status(200).send({
                error:contract.errors()
                })
            };
            const senhaNova =  md5(req.body.senha + process.env.APP_SECRET_KEY);
            const usuario = await Usuario.create({
                nome,
                senha:senhaNova,
                email,
                banco,
                telefone  
            }); 

            return res.status(201).json({
                msg:"Usuario cadastrado com sucesso",
                data:usuario

            })
        }
        catch(err){
            return res.status(200).send({
                error:err.message
            })
        }

},


async update(req,res){
         
        try{
            const {id} = req.params;
        const {nome,email,telefone,banco} = req.body;
       
       
        let contract = new ValidationContract();


      
        const usuarioExist  = await Usuario.findOne({where:{email:email}});
        const usuarioExist2  = await Usuario.findOne({where:{id:id}});
        contract.isRequired(nome, 'nome', 'O Cep é obrigatorio');
        contract.isRequired(email, 'email', 'O email é obrigatorio');
        contract.isRequired(banco, 'banco', 'O Equipamento é obrigatorio');
        contract.isEmailUpdade(usuarioExist,usuarioExist2, 'email', 'O email  já existe');
        // Se os dados forem inválidos
        if (!contract.isValid()) {
            return res.status(200).send({
            error:contract.errors()
            })
        };
       
        const usuarioold = await Usuario.findByPk(id);
        if(!usuarioold){
            return res.status(201).json({
                msg:'Usuario não existe',
               
            })
        }

       
        const usuario = await usuarioold.update({
            nome,
            email,
            banco,
            telefone ,
            
        }); 

        return res.status(201).json({
            msg:"Usuario Atualizado com sucesso",
            data:usuario

        })
    }
    catch(err){
        return res.status(200).send({
            error:err.message
        })
    }

},

async index(req,res){
    try{
        const usuarios = await Usuario.findAll();
        return res.status(201).send({
            usuarios:usuarios
        })
    }
    catch(err){
        res.status(200).send({
            error:err.message
        })
    }
},

 async show(req,res){
        try{
           const { id } = req.params;
          
           const usuario = await Usuario.findByPk(id);
           return res.status(201).send({
               usuario:usuario
           })
        }
        catch(err){
            return res.status(200).send({
                error:err.message
            })
        }
   
 },

async autenticar(req,res){
        try{
            const user = await Usuario.findOne({
                where:{
                    email:req.body.email,
                    senha:md5(req.body.senha + process.env.APP_SECRET_KEY)
                },
                include:{association:"permissoes"},
                
            
            });
   
              if(!user){
                res.status(400).send({
                    error:'Email ou senha errada'
                });
                return;
               }
              
           const token = await authService.generateToken({
                id: user.id,
                email: user.email,
                nome: user.nome,
                banco: user.banco,
                permissoes:user.permissoes
            });

        res.status(201).send({
            access_token: token,
                data: {
                    id:user.id,
                    email: user.email,
                    nome: user.nome,
                    banco: user.banco,
                    permissoes:user.permissoes
                 },
                
        });

        }
        catch(err){
            return res.status(200).send({
                error:err.message
            })
        }
},

async decoude(req,res){
       
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);
        
        res.status(200).send({
            usuario: data,
                
        });
},

async mudastatus(req,res){
        try{
            const {id} = req.params;
            const usuario = await Usuario.findByPk(id);
            if(!usuario){
                return res.status(200).send({
                    msg:'Usuario não existe'
                });
            }
            if(usuario.status == "A"){
                const usuarioAtualizado = usuario.update({
                    status:"I"
                })
                return res.status(201).send({
                    msg:"Usuairo Inativo",
                    
                })
            }
            else{
                const usuarioAtualizado = usuario.update({
                    status:"A"
                })
                return res.status(201).send({
                    msg:"Usuairo Ativo",
                    
                })
            }
           

           
        }
        catch(err){
            return res.status(200).send({
                error:err.message
            })
        }
},

async showPermissao(req,res){
        try{
           const { id } = req.params;
          
           const usuario = await Usuario.findByPk(id,{include:{association:"permissoes"}});
           return res.status(201).send({
               usuario:usuario
           })
        }
        catch(err){
            return res.status(200).send({
                error:err.message
            })
        }
   
},
   
}

