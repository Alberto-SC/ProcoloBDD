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
  `presidente` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Academia`
--

LOCK TABLES `Academia` WRITE;
/*!40000 ALTER TABLE `Academia` DISABLE KEYS */;
INSERT INTO `Academia` VALUES (0,'Matemáticas',0),(1,'Ciencias',3);
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
  `numTT` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alumno`
--

LOCK TABLES `Alumno` WRITE;
/*!40000 ALTER TABLE `Alumno` DISABLE KEYS */;
INSERT INTO `Alumno` VALUES (20180,'Alumno0','Alumno0@alumno.ipn.mx','Alumno0','Alumno0',0),(20181,'Alumno1','Alumno1@alumno.ipn.mx','Alumno1','Alumno1',0),(20182,'Alumno2','Alumno2@alumno.ipn.mx','Alumno2','Alumno2',0),(20183,'Alumno3','Alumno3@alumno.ipn.mx','Alumno3','Alumno3',1),(20184,'Alumno4','Alumno4@alumno.ipn.mx','Alumno4','Alumno4',1),(20185,'Alumno5','Alumno5@alumno.ipn.mx','Alumno5','Alumno5',1);
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
  `discriminante` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PalabraClave`
--

LOCK TABLES `PalabraClave` WRITE;
/*!40000 ALTER TABLE `PalabraClave` DISABLE KEYS */;
INSERT INTO `PalabraClave` VALUES (0,'Bases de datos',0),(1,'Lenguaje natural',1),(2,'Web',2),(3,'Minería de datos',3),(4,'Sistemas distribuidos',4);
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
  `password` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profesor`
--

LOCK TABLES `Profesor` WRITE;
/*!40000 ALTER TABLE `Profesor` DISABLE KEYS */;
INSERT INTO `Profesor` VALUES (0,'profesor0','profesor0','profesor0'),(1,'profesor1','profesor1','profesor1'),(2,'profesor2','profesor2','profesor2'),(3,'profesor3','profesor3','profesor3'),(4,'profesor4','profesor4','profesor4'),(5,'profesor5','profesor5','profesor5');
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
  `ruta_pdf` varchar(19) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Protocolo`
--

LOCK TABLES `Protocolo` WRITE;
/*!40000 ALTER TABLE `Protocolo` DISABLE KEYS */;
INSERT INTO `Protocolo` VALUES (0,'Analizador de datos online','/home/user/pdf0.pdf'),(1,'Redactor de textos','/home/user/pdf1');
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
  `sinodal` varchar(0) DEFAULT NULL
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
  `clave` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pertenece`
--

LOCK TABLES `pertenece` WRITE;
/*!40000 ALTER TABLE `pertenece` DISABLE KEYS */;
INSERT INTO `pertenece` VALUES (0,0),(1,0),(2,0),(3,1),(4,1),(5,1);
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
  `PC_numTT` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiene`
--

LOCK TABLES `tiene` WRITE;
/*!40000 ALTER TABLE `tiene` DISABLE KEYS */;
INSERT INTO `tiene` VALUES (0,0),(0,2),(1,1),(1,3);
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

-- Dump completed on 2019-08-22 15:20:27
