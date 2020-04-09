const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

//ESTE MÓDULO ACTUARÁ COMO MIDDLEWARE EN EL MAIN.JS por lo que pasaremos por parámetro req, res y next (este último, para que el middleware sepa qué hacer después)

exports.checkToken = (req, res, next) => {
  //1. Comprobar si el endpoint es /login o /register (si son, no necesitaríamos cookie)
  if (req.path !== "/login" && req.path !== "/nuevoUsuario") {
    //Si no es ninguno de esos endpoints, comprobamos si el user tiene la cookie en el navegador -> comprobamos que en el objeto req.cookies exista la cookie sello (req.cookies será un objeto con clave-valor, clave como nombre de la cookie y valor con el valor de la cookie, este objeto podrá contener muchas cookies distintas)
    if (req.cookies["sello"] !== undefined) {
      //hay que comprobar que la cookie "sello" no sea una cookie corrupta, tendrá que ser una cookie bien formada
      //jwt.verify() verifica que un toke ha sido creado a partir de nuestra clave secreta y que no ha sido modificado o corrompido. Tendremos que pasarle como primer parámetro la cookie, como segundo la clave secreta y como tercero, una función que se ejecute cuando se termine de verificar el token (para devolver un error si está corrompido o una confirmación si está bien creado el token)
      jwt.verify(
        req.cookies["sello"],
        secrets.jwt_clave,
        (error, confirmacion) => {
          if (error) {
            console.log(error);
            res.status(401).send({ error: "token no válido" });
          } else if (confirmacion) {
            next(); //estas usando un token valido, pasa adelante
          } else {
            res.status(401).send({ error: "token no válido" });
          }
        }
      );
    } else {
      res
        .status(401)
        .send({ error: "No estás autentificado", loginURL: "/login" });
    }
  } else {
    next(); //estas usando un url de login o nuevoUsuario, así que sigue
  }
};
