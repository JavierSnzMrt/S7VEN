const usuariosModel = require('../models/usuarios.model');
const {validationResult} = require('express-validator');
const bcrypt = require("bcrypt");
const jwt= require('jsonwebtoken');
const secrets = require('../config/secrets');

exports.listaUsuarios= async(req,res) => {
    try {
        const result = await usuariosModel.getAllUsers();
        res.send(result);
    }catch(error){
        res.send(error)
    }
}

exports.getSingleUser=async (req,res) => {
    try{
        const user_area = req.params.user_area;
        const result = await usuariosModel.getUserByArea(user_area);
        res.send(result)
    }catch(error){
        res.send(error)
    }
}

exports.getSingleUserID=async (req,res) => {
    try{
        const id = req.params.id;
        const result = await usuariosModel.getUserById(id);
        res.send(result)
    }catch(error){
        res.send(error)
    }
}

exports.insertSingleUser= async (req,res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()){
        const name = req.body.name;
        const email = req.body.email;
        const age = req.body.age;
        const city = req.body.city;
        const training = req.body.training;
        const experience = req.body.experience;
        const user_area= req.body.user_area;
        const offer = req.body.offer;

        try {
            const hash = await bcrypt.hash(req.body.password, 13);
            const result = await usuariosModel.insertSingleUser(name, email, hash, age, city, training, experience, user_area, offer);
            res.send(result)
        }catch(error) {
            res.send(errors)
        }
    }else {
        res.status(400).send({"error": "El body está mal formado", "explicación" : errors})
    }
}

//actualizar

exports.updateSingleUser = async (req, res) => {
    const errors = validationResult(req) //Ejecuta las validaciones
    if (errors.isEmpty()) {
        const name = req.body.name;
        const email = req.body.email;
        const age = req.body.age;
        const city = req.body.city;
        const training = req.body.training;
        const experience = req.body.experience;
        const user_area= req.body.user_area;
        const offer = req.body.offer;
        const id = req.body.id;
        //Llamo al modelo
        try {
            const hash = await bcrypt.hash(req.body.password, 13);
            const result = await usuariosModel.updateUser(id, name, email, hash, age, city, training, experience, user_area, offer);
            if (result.affectedRows > 0) {
                res.send({ "message": "Dato modificado con éxito!" })
            } else {
                res.status(404).send({ "error": "Ese ID no existe" })
            }
        } catch (error) {
            res.send(error);
        }
    } else {
        res.status(400).send({ "error": "El body está mal formado", "explicacion": errors })
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await usuariosModel.deleteUser(id);
        if (results.affectedRows > 0) {
            res.send({"message": `Ok producto con el id ${id} eliminado!`})
        } else {
            res.status(404).send({"error": "Ese ID no existe."})
        }
    } catch (error) {
        res.send(error)
    }
}

exports.login = async (req, res) => {
    const email = req.body.email;
    const password  = req.body.password;
    try {
      const usuario = await usuariosModel.getUserByEmail(email);
      //usuario[0] lo ponemos porque de la query obtendremos un array de un solo elemento
      const match = await bcrypt.compare(password, usuario[0].password);
      if (match) {
        //JWT en el primer parámetro guardamos un JSON con info del user
        //segundo parámetro: será la contraseña
        //tercer parámetro: callback => se ejecutará cuando acabe de generarse el token
        jwt.sign({ email: usuario[0].email, id: usuario[0].id}, secrets.jwt_clave, (error, token) => {
          if (error) {
            res.send(error);
          } else {
            //npm i cookie-parser y usar como middleware en main.js
            res.cookie("sello", token);
            //para trabajar en local pasaremos la clave token para ir viendo su valor mientras desarrollamos desde el cliente
            res.send({
              message: "Ok, tu contraseña coincide, estás autorizado",
              token: token,
            });
          }
        });
      } else {
        res.status(400).send({ error: "las contraseñas no coinciden" });
      }
    } catch (error) {
      console.log("catch del bcrypt compare");
      res.send(error);
    }
};