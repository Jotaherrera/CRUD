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
  const IdDoctores = req.body.IdDoctores;
  const ApellidoUs = req.body.ApellidoUs;
  const NombreUs = req.body.NombreUs;
  const CorreoUs = req.body.CorreoUs;
  const Especialidad = req.body.Especialidad;
  connection.query(
    'UPDATE doctores SET ? WHERE IdDoctores= ?',
    [
      {
        ApellidoUs: ApellidoUs,
        NombreUs: NombreUs,
        CorreoUs: CorreoUs,
        Especialidad: Especialidad,
      },
      IdDoctores,
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
