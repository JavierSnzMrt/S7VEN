const proyectosModel = require('../models/proyectos.model');
const {validationResult} = require('express-validator');


exports.listaProyectos = async(req,res) => {
    try {
        const result = await proyectosModel.getAllProjects();
        res.send(result);
    }catch(error){
        res.send(error)
    }
}

exports.getSingleProject=async (req,res) => {
    try{
        const area = req.params.area;
        const result = await proyectosModel.getProjectByArea(area);
        res.send(result)
    }catch(error){
        res.send(error)
    }
}

exports.getSingleProjectID=async (req,res) => {
    try{
        const id = req.params.id;
        const result = await proyectosModel.getProjectById(id);
        res.send(result)
    }catch(error){
        res.send(error)
    }
}

exports.insertSingleProject= async (req,res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()){
        const project_name = req.body.project_name;
        const area = req.body.area;
        const description = req.body.description;
        const search = req.body.search;
        const status = req.body.status;
        const FK_id_user = req.body.FK_id_user;
        try {
            
            const result = await proyectosModel.insertProject(project_name, area, description, status, search, FK_id_user)
            console.log(result)
            res.send(result)
        }catch(error) {
            console.log(error)
            res.send(error)
        }
    }else {
        res.status(400).send({"error": "El body está mal formado", "explicación" : errors})
    }
}

//actualizar

exports.updateSingleProject = async (req, res) => {
    const errors = validationResult(req) //Ejecuta las validaciones
    if (errors.isEmpty()) {
        const id = req.body.id;
        const project_name = req.body.project_name;
        const area = req.body.area;
        const description = req.body.description;
        const search = req.body.search;
        const status = req.body.status;
        //Llamo al modelo
        try {
            const result = await proyectosModel.updateProject(id, project_name, area, description, search, status);
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

exports.deleteSingleProject = async (req, res) => {
    const id = req.params.id;
    try {
        const results = await proyectosModel.deleteProject(id);
        if (results.affectedRows > 0) {
            res.send({"message": `Ok proyecto con el id ${id} eliminado!`})
        } else {
            res.status(404).send({"error": "Ese ID no existe."})
        }
    } catch (error) {
        res.send(error)
    }
}

