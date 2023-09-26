const connection = require('../../database/db');

//save Usuario
exports.saveUsuario = (req, res) => {
  const Nombre = req.body.Nombre;
  const Correo = req.body.Correo;
  const Celular = req.body.Celular;
  const Edad = req.body.Edad;
  const Genero = req.body.Genero;
  connection.query(
    'INSERT INTO usuario SET ?',
    {
      Nombre: Nombre,
      Correo: Correo,
      Celular: Celular,
      Edad: Edad,
      Genero: Genero,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect('/usuario');
      }
    }
  );
};

//update usuario
exports.updateUsuario = (req, res) => {
  const IdUsuario = req.body.IdUsuario;
  const Nombre = req.body.Nombre;
  const Correo = req.body.Correo;
  const Celular = req.body.Celular;
  const Edad = req.body.Edad;
  const Genero = req.body.Genero;
  connection.query(
    'UPDATE usuario SET ? WHERE IdUsuario= ?',
    [
      {
        Nombre: Nombre,
        Correo: Correo,
        Celular: Celular,
        Edad: Edad,
        Genero: Genero,
      },
      IdUsuario,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect('/usuario');
      }
    }
  );
};
