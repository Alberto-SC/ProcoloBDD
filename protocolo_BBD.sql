-- MySQL dump 10.16  Distrib 10.1.26-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	10.1.26-MariaDB-0+deb9u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Academia`
--

DROP TABLE IF EXISTS `Academia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Academia` (
  `clave` tinyint(4) DEFAULT NULL,
  `nombre` varchar(11) DEFAULT NULL,
  `presidente` tinyint(4) DEFAULT NULL,
	PRIMARY KEY (`clave`),
	KEY `presidente` (`presidente`),
	CONSTRAINT `Academia_ibfk_1` FOREIGN KEY (`presidente`) REFERENCES `Profesor` (`numEmp`)	
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Academia`
--

LOCK TABLES `Academia` WRITE;
/*!40000 ALTER TABLE `Academia` DISABLE KEYS */;
INSERT INTO `Academia` VALUES 
		('ISC-01', 'Sistemas Digitales', '20139583984'),
		('ISC-02', 'Sistemas Distribuidos', '20139587564'),
		('ISC-03', 'Ciencias Básicas', '20139589362'),
		('ISC-04', 'Ciencias de la computación', '20139546285'),
		('ISC-05', 'Fundamentos de Sistemas Electrónicos', '20139536474'),
		('ISC-06', 'Ciencias Sociales', '20139584321'),
		('ISC-07', 'Trabajo Terminal', '20135998763'),
		('ISC-08', 'Ingeniería de Sotware', '20139546295'),
		('ISC-09', 'Proyectos Estratégicos y Toma de decisiones', '20169843093');

/*!40000 ALTER TABLE `Academia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Alumno`
--

DROP TABLE IF EXISTS `Alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Alumno` (
  `boleta` mediumint(9) DEFAULT NULL,
  `nombre` varchar(7) DEFAULT NULL,
  `email` varchar(21) DEFAULT NULL,
  `usuario` varchar(7) DEFAULT NULL,
  `password` varchar(7) DEFAULT NULL,
  `numTT` tinyint(4) DEFAULT NULL,
	PRIMARY KEY (`boleta`),
	KEY `numTT` (`numTT`),
	CONSTRAINT `Alumno_ibfk_1` FOREIGN KEY (`numTT`) REFERENCES `Protocolo` (`numTT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alumno`
--

LOCK TABLES `Alumno` WRITE;
/*!40000 ALTER TABLE `Alumno` DISABLE KEYS */;
INSERT INTO `Alumno` VALUES 
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
/*!40000 ALTER TABLE `Alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PalabraClave`
--

DROP TABLE IF EXISTS `PalabraClave`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PalabraClave` (
  `numTT` tinyint(4) DEFAULT NULL,
  `palabra` varchar(21) DEFAULT NULL,
  `discriminante` tinyint(4) DEFAULT NULL,
	PRIMARY KEY (`numTT`),
  UNIQUE KEY `discriminante` (`discriminante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PalabraClave`
--

LOCK TABLES `PalabraClave` WRITE;
/*!40000 ALTER TABLE `PalabraClave` DISABLE KEYS */;
INSERT INTO `PalabraClave` VALUES 
  ('2020-A001', 'ingeniería artificial lenguaje', '01'),
  ('2020-A002', 'compilador inteligencia robot', '02'),
	('2020-A003', 'software medicina discapacidad', '03'),
	('2020-A004', 'gestión software finanzas', '04');
/*!40000 ALTER TABLE `PalabraClave` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profesor`
--

DROP TABLE IF EXISTS `Profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Profesor` (
  `numEmp` tinyint(4) DEFAULT NULL,
  `nombre` varchar(9) DEFAULT NULL,
  `usuario` varchar(9) DEFAULT NULL,
  `password` varchar(9) DEFAULT NULL,
	PRIMARY KEY (`numEmp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profesor`
--

LOCK TABLES `Profesor` WRITE;
/*!40000 ALTER TABLE `Profesor` DISABLE KEYS */;
INSERT INTO `Profesor` VALUES 
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
/*!40000 ALTER TABLE `Profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Protocolo`
--

DROP TABLE IF EXISTS `Protocolo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Protocolo` (
  `numTT` tinyint(4) DEFAULT NULL,
  `nombreTT` varchar(26) DEFAULT NULL,
  `ruta_pdf` varchar(19) DEFAULT NULL,
	PRIMARY KEY (`numTT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Protocolo`
--

LOCK TABLES `Protocolo` WRITE;
/*!40000 ALTER TABLE `Protocolo` DISABLE KEYS */;
INSERT INTO `Protocolo` VALUES 
  ('2020-A001', 'Prototipo de identificación de lenguaje', ''),
  ('2020-A002', 'Compilador a través de un bot', ''),
  ('2020-A003', 'Protitpo de ayuda para discapacidad visual', ''),
  ('2020-A004', 'Plataforma web para ayuda al ahorro', '');

/*!40000 ALTER TABLE `Protocolo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluacion`
--

DROP TABLE IF EXISTS `evaluacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evaluacion` (
  `id_evaluacion` varchar(0) DEFAULT NULL,
  `ruta_pdf_eval` varchar(0) DEFAULT NULL,
  `estatus` varchar(0) DEFAULT NULL,
  `numTT` varchar(0) DEFAULT NULL,
  `sinodal` varchar(0) DEFAULT NULL,
	PRIMARY KEY (`id_evaluacion`),
  UNIQUE KEY `numTT` (`numTT`,`sinodal`),
  KEY `sinodal` (`sinodal`),
  CONSTRAINT `evaluacion_ibfk_1` FOREIGN KEY (`numTT`) REFERENCES `Protocolo` (`numTT`),
  CONSTRAINT `evaluacion_ibfk_2` FOREIGN KEY (`sinodal`) REFERENCES `Profesor` (`numEmp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluacion`
--

LOCK TABLES `evaluacion` WRITE;
/*!40000 ALTER TABLE `evaluacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pertenece`
--

DROP TABLE IF EXISTS `pertenece`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pertenece` (
  `numEmp` tinyint(4) DEFAULT NULL,
  `clave` tinyint(4) DEFAULT NULL,
	PRIMARY KEY (`numEmp`,`clave`),
  KEY `clave` (`clave`),
  CONSTRAINT `pertenece_ibfk_1` FOREIGN KEY (`numEmp`) REFERENCES `Profesor` (`numEmp`),
  CONSTRAINT `pertenece_ibfk_2` FOREIGN KEY (`clave`) REFERENCES `Academia` (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pertenece`
--

LOCK TABLES `pertenece` WRITE;
/*!40000 ALTER TABLE `pertenece` DISABLE KEYS */;
INSERT INTO `pertenece` VALUES
  ('20139583984', 'ISC-01'),
	('20139587564', 'ISC-02'),
	('20139589362', 'ISC-03'),
	('20139546285', 'ISC-04'),
	('20139536474', 'ISC-05'),
	('20139584321', 'ISC-06'),
	('20135998763', 'ISC-07'),
	('20139546295', 'ISC-08'),
	('20169843093', 'ISC-09'),
	('20169847381', 'ISC-01'),
	('20169845173', 'ISC-02'),
	('20129843093', 'ISC-03'),
	('20129833001', 'ISC-04'),
	('20129843647', 'ISC-05'),
	('20119823043', 'ISC-06');
/*!40000 ALTER TABLE `pertenece` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiene`
--

DROP TABLE IF EXISTS `tiene`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tiene` (
  `TT_numTT` tinyint(4) DEFAULT NULL,
  `PC_numTT` tinyint(4) DEFAULT NULL,
	PRIMARY KEY (`TT_numTT`,`PC_numTT`),
  KEY `PC_numTT` (`PC_numTT`),
  CONSTRAINT `tiene_ibfk_1` FOREIGN KEY (`TT_numTT`) REFERENCES `Protocolo` (`numTT`),
  CONSTRAINT `tiene_ibfk_2` FOREIGN KEY (`PC_numTT`) REFERENCES `PalabraClave` (`numTT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiene`
--

LOCK TABLES `tiene` WRITE;
/*!40000 ALTER TABLE `tiene` DISABLE KEYS */;
INSERT INTO `tiene` VALUES
  ('2020-A001', '2020-A001'),
  ('2020-A002', '2020-A002'),
  ('2020-A003', '2020-A003'),
  ('2020-A004', '2020-A004');
/*!40000 ALTER TABLE `tiene` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;