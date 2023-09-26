CREATE DATABASE asignacion_citas;

USE asignacion_citas;


CREATE TABLE Usuario(
    IdUsuario int AUTO_INCREMENT PRIMARY KEY,
    Nombre varchar(20),
    Correo varchar(60),
    Celular varchar(12),
    Edad tinyint,
    Genero SMALLINT
);

CREATE TABLE Citas(
   	IdCitas int AUTO_INCREMENT PRIMARY KEY,
    IdUsuario int,
    IdDoctor int,
    FechaCita date,
    Lugar varchar(30),
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario),
    FOREIGN KEY (IdDoctor) REFERENCES Doctores(IdDoctor)
);

CREATE TABLE Doctores(
   	IdDoctor int AUTO_INCREMENT PRIMARY KEY,
    ApellidoUs varchar(20),
    NombreUs varchar(20),
    CorreoUs varchar(60),
    Especialidad varchar(30)
);
