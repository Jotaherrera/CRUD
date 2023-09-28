const connection = require('../../database/db');

// save citas
exports.saveCitas = (req, res) => {
  const IdUsuario = req.body.IdUsuario;
  const IdDoctor = req.body.IdDoctor;
  const FechaCita = req.body.FechaCita;
  const Lugar = req.body.Lugar;
  connection.query(
    'INSERT INTO citas SET ?',
    {
      IdUsuario: IdUsuario,
      IdDoctor: IdDoctor,
      FechaCita: FechaCita,
      Lugar: Lugar,
    },
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.redirect('/citas');
      }
    }
  );
};

// update citas
exports.updateCitas = (req, res) => {
  const IdCitas = req.body.IdCitas;
  const IdUsuario = req.body.IdUsuario;
  const IdDoctor = req.body.IdDoctor;
  const FechaCita = req.body.FechaCita;
  const Lugar = req.body.Lugar;
  connection.query(
    'UPDATE citas SET ? WHERE IdCitas= ?',
    [
      {
        IdUsuario: IdUsuario,
        IdDoctor: IdDoctor,
        FechaCita: FechaCita,
        Lugar: Lugar,
      },
      IdCitas,
    ],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.redirect('/citas');
      }
    }
  );
};
