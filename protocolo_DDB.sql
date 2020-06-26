-- Database: proyecto_DDB
-- POSTGRES SQL
-- DROP DATABASE "proyecto_DDB";

CREATE DATABASE "proyecto_DDB"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Mexico.1252'
    LC_CTYPE = 'Spanish_Mexico.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


CREATE TABLE public."Profesor"
(
	numEmp character varying(20) NOT NULL,
	nombre character varying(100) NOT NULL,
	usuario character varying(20) NOT NULL,
	password0 character varying(30) NOT NULL,
	CONSTRAINT Profesor PRIMARY KEY (numEmp)
);

CREATE TABLE public."Academia"
(
  clave character varying(20) NOT NULL,
  nombre character varying(50) NOT NULL,
  presidente character varying(20) NOT NULL,
  CONSTRAINT Academia PRIMARY KEY (clave),
  FOREIGN KEY (presidente) REFERENCES "Profesor" (numEmp)
);

CREATE TABLE public."Alumno"
(
  boleta character varying(15) NOT NULL,
  nombre character varying(100) NOT NULL,
  email character varying(100) NOT NULL,
  usuario character varying(20) NOT NULL,
  password0 character varying(25) NOT NULL,
  numTT character varying(10) NOT NULL,
  CONSTRAINT Alumno PRIMARY KEY (boleta)
);

CREATE TABLE public."PalabraClave" 
(
  numTT integer NOT NULL,
  palabra character varying(25) NOT NULL,
  discriminante integer NOT NULL UNIQUE,
  CONSTRAINT PalabraClave PRIMARY KEY (numTT)
);


CREATE TABLE public."Protocolo" 
(
  numTT character varying(10) NOT NULL,
  nombreTT character varying(50) NOT NULL,
  ruta_pdf character varying(200) NOT NULL,
  CONSTRAINT Protocolo PRIMARY KEY (numTT),
  FOREIGN KEY (numTT) REFERENCES "Protocolo" (numTT)	
);

CREATE TABLE public."evaluacion" 
(
  id_evaluacion integer NOT NULL,
  ruta_pdf_eval character varying(200) NOT NULL,
  estatus character varying(30) NOT NULL,
  numTT character varying(10) NOT NULL UNIQUE,
  sinodal character varying(20) NOT NULL UNIQUE,
  PRIMARY KEY (id_evaluacion),
  FOREIGN KEY (numTT) REFERENCES "Protocolo" (numTT),	
  FOREIGN KEY (sinodal) REFERENCES "Profesor" (numEmp)
  );

CREATE TABLE public."pertenece" 
(
  numEmp character varying(20) NOT NULL,
  clave character varying(20) NOT NULL,
  PRIMARY KEY (numEmp,clave),
  FOREIGN KEY (numEmp) REFERENCES "Profesor" (numEmp),
  FOREIGN KEY (clave) REFERENCES "Academia" (clave)
);

CREATE TABLE public."tiene" 
(
  TT_numTT character varying(10) NOT NULL,
  PC_numTT integer NOT NULL,
  PRIMARY KEY (TT_numTT,PC_numTT),
  FOREIGN KEY (TT_numTT) REFERENCES "Protocolo" (numTT),
  FOREIGN KEY (PC_numTT) REFERENCES "PalabraClave" (numTT)
);

-- Registros

INSERT INTO public."Alumno"(
	boleta, nombre, email, usuario, password0, numtt)
	VALUES 
		(2016630197, 'Tafnes Jiménez Aguilar', 'tafnesL@gmail.com', 2016630197, 'HolaMundo97', '2020-A001'),
		(2016630196, 'Luis Silva Cazares', 'alberto98@hotmail.com', 2016630196, 'HolaMundo96', '2020-A001'),
		(2016630195, 'Isam Espinoza Flores', 'isaD197@gmail.com', 2016630195, 'HolaMundo95', '2020-A001'),
		(2016630194, 'Pedro Ordoñez Morales', 'pedroLO98@gmail.com', 2016630194, 'HolaMundo94', '2020-A002'),
		(2016630193, 'Luis Rojas Pérez', 'luisrope@hotmail.com', 2016630193, 'HolaMundo93', '2020-A002'),
		(2016630192, 'Armando Pérez Rodríguez', 'armandopero@hotmail.com', 2016630192, 'HolaMundo92', '2020-A002'),
		(2016630191, 'Daniel Lugo Martínez', 'dany27lm@gmail.com', 2016630191, 'HolaMundo91', '2020-A003'),
		(2016630190, 'Sergio Díaz Juárez', 'sergio283dj@hotmail.com', 2016630190, 'HolaMundo90', '2020-A003'),
		(2016630189, 'Diego Barrón López', 'diegobarron@gmail.com', 2016630189, 'HolaMundo89', '2020-A003'),
		(2016630188, 'Vanesa Gutiérrez Ruiz', 'vanesaruiz@gmail.com', 2016630188, 'HolaMundo88', '2020-A004');

INSERT INTO public."Profesor"(
	numemp, nombre, usuario, password0)
	VALUES 
		('20139583984', 'Karla Paulette	Flores Silva', 'Clave202000', '20139583984'),
		('20139587564', 'Paula Salas Ivars', 'Clave202001', '20139587564'),
		('20139589362', 'Pedro Calleja Casas', 'Clave202002', '20139589362'),
		('20139546285', 'Xavir Faner Capó', 'Clave202003', '20139546285'),
		('20139536474', 'Verónica Pablo Fontecha', 'Clave202004', '20139536474'),
		('20139584321', 'Nila Saez Calveras', 'Clave202005', '20139584321'),
		('20135998763', 'Marcos Pérez Suárez', 'Clave202006', '20135998763'),
		('20139546295', 'Margalida Perello Roig', 'Clave202007', '20139546295'),
		('20169843093', 'Mariana Mosquera Suárez', 'Clave202008', '20169843093'),
		('20169847381', 'Roberto López Ruiz', 'Clave202009', '20169847381'),
		('20169845173', 'Juan López Rosas', 'Clave202010', '20169845173'),
		('20129843093', 'Marcelo Pérez Piña', 'Clave202011', '20129843093'),
		('20129833001', 'Camila Gutiérrez Hernández', 'Clave202012', '20129833001'),
		('20129843647', 'Eva Gómez Jiménez', 'Clave202013', '20129843647'),
		('20119823043', 'Carlos Jiménez Rojas', 'Clave202014', '20119823043');

INSERT INTO public."Academia"(
	clave, nombre, presidente)
	VALUES 
		('ISC-01', 'Sistemas Digitales', '20139583984'),
		('ISC-02', 'Sistemas Distribuidos', '20139587564'),
		('ISC-03', 'Ciencias Básicas', '20139589362'),
		('ISC-04', 'Ciencias de la computación', '20139546285'),
		('ISC-05', 'Fundamentos de Sistemas Electrónicos', '20139536474'),
		('ISC-06', 'Ciencias Sociales', '20139584321'),
		('ISC-07', 'Trabajo Terminal', '20135998763'),
		('ISC-08', 'Ingeniería de Sotware', '20139546295'),
		('ISC-09', 'Proyectos Estratégicos y Toma de decisiones', '20169843093');