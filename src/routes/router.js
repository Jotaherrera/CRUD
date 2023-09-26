const express = require('express');
const router = express.Router();
const connection = require('../../database/db');
const usuarioController = require('../controllers/usarioController');

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
router.get('/doctor', (req, res) => {
  res.render('doctor');
});

// read citas
router.get('/citas', (req, res) => {
  res.render('citas');
});

// Methods for usuario
router.post('/save-usuario', usuarioController.saveUsuario);
router.post('/update-usuario', usuarioController.updateUsuario);

// Methods for doctor

module.exports = router;
