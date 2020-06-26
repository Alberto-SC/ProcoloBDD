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
