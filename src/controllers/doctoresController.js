const connection = require('../../database/db');

// save doctores
exports.saveDoctores = (req, res) => {
  const ApellidoUs = req.body.ApellidoUs;
  const NombreUs = req.body.NombreUs;
  const CorreoUs = req.body.CorreoUs;
  const Especialidad = req.body.Especialidad;
  connection.query(
    'INSERT INTO doctores SET ?',
    {
      ApellidoUs: ApellidoUs,
      NombreUs: NombreUs,
      CorreoUs: CorreoUs,
      Especialidad: Especialidad,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect('/doctores');
      }
    }
  );
};

// update doctores
exports.updateDoctores = (req, res) => {
  const IdDoctor = req.body.IdDoctor;
  const ApellidoUs = req.body.ApellidoUs;
  const NombreUs = req.body.NombreUs;
  const CorreoUs = req.body.CorreoUs;
  const Especialidad = req.body.Especialidad;
  connection.query(
    'UPDATE doctores SET ? WHERE IdDoctor= ?',
    [
      {
        ApellidoUs: ApellidoUs,
        NombreUs: NombreUs,
        CorreoUs: CorreoUs,
        Especialidad: Especialidad,
      },
      IdDoctor,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect('/doctores');
      }
    }
  );
};
