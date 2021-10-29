-- MySQL dump 10.13  Distrib 5.7.36, for Win64 (x86_64)
--
-- Host: localhost    Database: forwardsca
-- ------------------------------------------------------
-- Server version	5.7.36-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `company_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `rut` varchar(10) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `contact_name` varchar(50) NOT NULL,
  `user_id` int(10) unsigned NOT NULL DEFAULT '1',
  `contact_email` varchar(100) NOT NULL,
  PRIMARY KEY (`company_id`),
  UNIQUE KEY `rut` (`rut`),
  UNIQUE KEY `contact_email` (`contact_email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Antong Holdings','123456789',1,'Luiciana Limarez',1,'luicianolimares@example.com'),(2,'CMA CGM','123123123',1,'Elmer Figueroa Arce',2,'nosoychayanne@example.com'),(3,'Cosco Shipping','147258369',1,'Cuzco Jackson',1,'cuzcojackson@example.com'),(4,'Evergreen Line','654321789',1,'Hernan Velazques',1,'everchile@evergrennexample.cl'),(5,'Hamburg Sud','204510701',1,'Tahiel Leone',1,'tleone@example.com'),(6,'Hapag-Lloyd','111222333',1,'Charlotte Carrasco',1,'charrasco@example.com'),(7,'Hyundai','200111222',1,'Liu Rizzo',1,'liuzzo@example.com'),(8,'IRISL Group','101420357',1,'Martin Martini',1,'mamartini@example.com'),(9,'KMTC','146527380',1,'Constanza Schwarz',1,'cschawrz@example.com'),(10,'Maersk','852852852',1,'Camila Bauer',1,'camilab@example.com'),(11,'MSC','456546456',1,'Maxwell Sevillano Carrasco',1,'max@example.com'),(12,'One','111111111',1,'One Uno',1,'one1@example.br');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipments`
--

DROP TABLE IF EXISTS `shipments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipments` (
  `shipment_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `c_containers` int(10) unsigned NOT NULL DEFAULT '0',
  `company_id` int(10) unsigned NOT NULL,
  `zarpe_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `arrival_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `finshed` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`shipment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipments`
--

LOCK TABLES `shipments` WRITE;
/*!40000 ALTER TABLE `shipments` DISABLE KEYS */;
INSERT INTO `shipments` VALUES (1,40,1,'2021-10-06 03:00:00','2021-10-31 23:09:00','2021-10-28 15:25:20','2021-10-29 03:47:38',0,1),(10,50,1,'2021-10-28 15:28:51','2021-12-10 03:00:00','2021-10-28 15:28:51','2021-10-28 21:36:51',1,1),(11,50,2,'2021-10-28 15:28:51','2021-12-10 03:00:00','2021-10-28 15:28:51','2021-10-29 00:10:16',1,1),(12,50,3,'2021-10-28 15:28:51','2021-12-10 03:00:00','2021-10-28 15:28:51','2021-10-28 15:28:51',0,1),(13,110,1,'2021-10-28 15:28:51','2021-11-10 03:00:00','2021-10-28 15:28:51','2021-10-29 03:47:35',0,1),(14,50,1,'2021-10-28 15:28:51','2021-12-10 03:00:00','2021-10-28 15:28:51','2021-10-28 15:28:51',0,1),(15,100,1,'2021-10-28 15:28:51','2021-12-20 03:00:00','2021-10-28 15:28:51','2021-10-28 15:28:51',0,1),(16,80,1,'2021-10-28 15:28:51','2021-12-01 03:00:00','2021-10-28 15:28:51','2021-10-28 15:28:51',0,1),(17,50,5,'2021-10-28 15:28:51','2021-12-10 03:00:00','2021-10-28 15:28:51','2021-10-28 15:28:51',0,1);
/*!40000 ALTER TABLE `shipments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin',1),(2,'user','user',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-29  1:04:56
