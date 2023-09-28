const express = require('express');
const router = express.Router();
const connection = require('../../database/db');
const usuarioController = require('../controllers/usuarioController');
const doctoresController = require('../controllers/doctoresController');
const citasController = require('../controllers/citasController');

// index
router.get('/', (req, res) => {
  res.render('index');
});

// read usuario
router.get('/usuario', (req, res) => {
  connection.query('SELECT * FROM usuario', (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render('usuario', { results: results });
    }
  });
});

// create usuario
router.get('/create-usuario', (req, res) => {
  res.render('createUsuario');
});

// edit usuario
router.get('/edit-usuario/:IdUsuario', (req, res) => {
  const IdUsuario = req.params.IdUsuario;
  connection.query(
    'SELECT * FROM usuario WHERE IdUsuario =?',
    [IdUsuario],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render('editUsuario', { usuario: results[0] });
      }
    }
  );
});

// delete usuario
router.get('/delete-usuario/:IdUsuario', (req, res) => {
  const IdUsuario = req.params.IdUsuario;
  connection.query(
    'DELETE FROM usuario WHERE IdUsuario =?',
    [IdUsuario],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.redirect('/usuario');
      }
    }
  );
});

// read doctores
router.get('/doctores', (req, res) => {
  connection.query('SELECT * FROM doctores', (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render('doctores', { results: results });
    }
  });
});

// create doctores
router.get('/create-doctores', (req, res) => {
  res.render('createDoctores');
});

// edit doctores
router.get('/edit-doctor/:IdDoctor', (req, res) => {
  const IdDoctor = req.params.IdDoctor;
  connection.query(
    'SELECT * FROM doctores WHERE IdDoctor =?',
    [IdDoctor],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.render('editDoctores', { doctores: results[0] });
      }
    }
  );
});

// delete doctor
router.get('/delete-doctores/:IdDoctor', (req, res) => {
  const IdDoctor = req.params.IdDoctor;
  connection.query(
    'DELETE FROM doctores WHERE IdDoctor =?',
    [IdDoctor],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.redirect('/doctores');
      }
    }
  );
});

// read citas
router.get('/citas', (req, res) => {
  connection.query('SELECT * FROM citas', (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render('citas', { results: results });
    }
  });
});

router.get('/create-citas', (req, res) => {
  connection.query('SELECT * FROM doctores', (errorDoctores, doctores) => {
    if (errorDoctores) {
      throw errorDoctores;
    } else {
      connection.query('SELECT * FROM usuario', (errorUsuarios, usuario) => {
        if (errorUsuarios) {
          throw errorUsuarios;
        } else {
          console.log(doctores);
          console.log(usuario);
          res.render('createCitas', {
            data: { doctores: doctores, usuario: usuario },
          });
        }
      });
    }
  });
});

// edit citas (unfinished)
router.get('/edit-citas/:IdCitas', (req, res) => {
  const IdCitas = req.params.IdCitas;
  connection.query(
    'SELECT * FROM citas WHERE IdCitas = ?',
    [IdCitas],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        const citas = results[0];
        connection.query('SELECT * FROM usuario', (errorUsuario, usuario) => {
          if (errorUsuario) {
            throw errorUsuario;
          } else {
            connection.query(
              'SELECT * FROM doctores',
              (errorDoctor, doctores) => {
                if (errorDoctor) {
                  throw errorDoctor;
                } else {
                  res.render('editCitas', {
                    data: {
                      citas: citas,
                      usuario: usuario,
                      doctores: doctores,
                    },
                  });
                }
              }
            );
          }
        });
      }
    }
  );
});

// delete citas
router.get('/delete-citas/:IdCitas', (req, res) => {
  const IdCitas = req.params.IdCitas;
  connection.query(
    'DELETE FROM citas WHERE IdCitas =?',
    [IdCitas],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.redirect('/citas');
      }
    }
  );
});

// Methods for usuario
router.post('/save-usuario', usuarioController.saveUsuario);
router.post('/update-usuario', usuarioController.updateUsuario);

// Methods for doctor
router.post('/save-doctores', doctoresController.saveDoctores);
router.post('/update-doctores', doctoresController.updateDoctores);

// Methods for citas
router.post('/save-citas', citasController.saveCitas);
router.post('/update-citas', citasController.updateCitas);

module.exports = router;
