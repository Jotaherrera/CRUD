const express = require('express');
const router = express.Router();
const connection = require('../../database/db');
const usuarioController = require('../controllers/usuarioController');
const doctoresController = require('../controllers/doctoresController');

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

// read doctor
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

// Methods for usuario
router.post('/save-usuario', usuarioController.saveUsuario);
router.post('/update-usuario', usuarioController.updateUsuario);

// Methods for doctor
router.post('/save-doctores', doctoresController.saveDoctores);
router.post('/update-doctores', doctoresController.updateDoctores);

module.exports = router;
