const connection = require('./db.model');

exports.getAllUsers = () => {

    return new Promise(async (resolve, reject) => { 
        try {
            const data = await connection.query("SELECT * FROM usuarios")
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })

}

exports.getUserById = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await connection.query(
          `SELECT * FROM usuarios WHERE id=${id}`
        );
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
};

exports.getUserByEmail = email  => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await connection.query(
          `SELECT * FROM usuarios WHERE email='${email}'`
        );
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
};

exports.getUserByArea = user_area => {

    return new Promise( async (resolve, reject) => {
        try {
            const data = await connection.query(`SELECT * FROM usuarios WHERE user_area LIKE '%${user_area}%' OR training LIKE '%${user_area}%' OR experience LIKE '%${user_area}%' OR offer LIKE '%${user_area}%'`)
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })

};

exports.insertSingleUser = (name, email, password, age, city, training, experience, user_area, offer) => {
    
    return new Promise( async (resolve, reject) => {
        try {
            const result = await connection.query(`
                INSERT INTO usuarios (name, email, password, age, city, training, experience, user_area, offer)
                VALUES ("${name}", "${email}", "${password}", ${age}, "${city}", "${training}", "${experience}", "${user_area}", "${offer}")
                `)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })

};

exports.updateUser = (id, newName, newEmail, newPassword, newAge, newCity, newTraining, newExperience, newUser_area, newOffer) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await connection.query(`
            UPDATE usuarios 
            SET name = "${newName}", email = "${newEmail}", password = "${newPassword}", age = ${newAge}, city="${newCity}", training="${newTraining}", experience="${newExperience}", user_area="${newUser_area}", offer="${newOffer}"
            WHERE id = ${id}`);
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
};

exports.deleteUser = (id) => {
    return new Promise (async (resolve, reject) => {
        try{
            const data = await connection.query(`DELETE * FROM usuarios WHERE id=${id}`)
            resolve(data)
        }catch(error){
            reject(error)
        }
    })
};

