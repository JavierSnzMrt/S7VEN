const connection = require('./db.model');

exports.getAllProjects = () => {
    return new Promise (async (resolve,reject) => {
        try{
            const data = await connection.query("SELECT * FROM proyectos")
            resolve(data);
        }catch(error){
            reject(error)
        }
    })
}

exports.getProjectById = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await connection.query(
          `SELECT * FROM proyectos WHERE id=${id}`
        );
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

exports.getProjectByArea = area => {

    return new Promise( async (resolve, reject) => {
        try {
            const data = await connection.query(`SELECT * FROM proyectos WHERE area = '${area}' OR description LIKE '%${area}%' OR search LIKE '%${area}%'`)
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })

}

exports.insertProject = (project_name, area, description, search, status, FK_id_user) => {
    
    return new Promise( async (resolve, reject) => {
        try {
            const result = await connection.query(`
                INSERT INTO proyectos (project_name, area, description, search, status, FK_id_user)
                VALUES ("${project_name}", "${area}", "${description}", "${search}", "${status}", ${FK_id_user}))
                `)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })

}

exports.updateProject = (id, newProjectName, newArea, newDescription, newSearch, newStatus) => {
    return new Promise(async (resolve, reject) => {
        try {
            const sql = `
            UPDATE proyectos 
            SET nombre = "${newProjectName}", area = ${newArea}, description = ${newDescription}, search=${newSearch}, Training=${newStatus}
            WHERE id = ${id};
            `
            const result = await connection.query(sql);
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

exports.deleteProject = id => {
    return new Promise (async (resolve, reject) => {
        try{
            const data = await connection.query(`DELETE FROM proyectos WHERE id=${id}`)
            resolve(data)
        }catch(error){
            reject(error)
        }
    })
}