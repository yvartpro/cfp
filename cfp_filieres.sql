-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 19, 2026 at 10:08 AM
-- Server version: 10.11.17-MariaDB-cll-lve
-- PHP Version: 8.1.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `capbiobi_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cfp_filieres`
--

CREATE TABLE `cfp_filieres` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `hero_img_id` int(10) UNSIGNED DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cfp_filieres`
--

INSERT INTO `cfp_filieres` (`id`, `name`, `slug`, `hero_img_id`, `description`, `is_active`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Technologie de l\'Information de la Communication', 'technologie-de-l-information-de-la-communication', 36, 'Technologie de l’Information et de la Communication (TIC) forme les apprenants aux bases de l’informatique, des réseaux et des technologies numériques. Cette filière prépare à l’utilisation, à la maintenance et au développement des outils informatiques modernes.', 1, '2026-01-24 08:49:09', '2026-01-31 10:54:06', NULL),
(2, 'Mecanique Automobile', 'mecanique-automobile', 70, 'Mécanique Automobile forme les apprenants aux bases de la réparation, de l’entretien et du diagnostic des véhicules. Cette filière prépare à intervenir sur les systèmes mécaniques et électroniques des automobiles modernes.', 1, '2026-01-24 08:50:03', '2026-01-31 10:53:33', NULL),
(3, 'Transformation Agroalimentaire', 'transformation-agroalimentaire', 65, 'Transformation Agroalimentaire forme les apprenants aux techniques de transformation, de conservation et de valorisation des produits agricoles. Cette filière prépare à améliorer la qualité, l’hygiène et la durabilité des aliments destinés à la consommation.', 1, '2026-01-24 08:51:06', '2026-01-31 10:50:07', NULL),
(4, 'Hotelerie et Tourisme', 'hotelerie-et-tourisme', 22, 'Hôtellerie et Tourisme forme les apprenants aux métiers de l’accueil, de l’hébergement et de la restauration. Cette filière prépare à offrir des services de qualité dans le secteur du tourisme et de l’hôtellerie.', 1, '2026-01-24 08:51:55', '2026-01-31 10:49:48', NULL),
(5, 'Construction Metallique', 'construction-metallique', 14, 'Construction Métallique forme les apprenants aux techniques de fabrication, d’assemblage et de montage des structures métalliques. Cette filière prépare aux métiers liés à la conception et à la réalisation d’ouvrages en métal.', 1, '2026-01-24 08:52:17', '2026-01-24 08:52:17', NULL),
(6, 'Fabrication Metallique', 'fabrication-metallique', 50, 'Fabrication Métallique forme les apprenants aux techniques de découpe, de façonnage et d’assemblage des pièces métalliques. Cette filière prépare à la production d’éléments métalliques utilisés dans différents secteurs industriels.', 1, '2026-01-24 08:52:57', '2026-01-31 10:49:09', NULL),
(7, 'Électricité d’Équipement', 'lectricit-d-quipement', 17, 'Électricité d’Équipement forme les apprenants aux bases de l’installation, de la maintenance et du dépannage des équipements électriques. Cette filière prépare à intervenir sur les installations électriques domestiques et industrielles en respectant les normes de sécurité.', 1, '2026-01-24 08:55:01', '2026-01-24 08:55:01', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cfp_filieres`
--
ALTER TABLE `cfp_filieres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD UNIQUE KEY `slug_2` (`slug`),
  ADD UNIQUE KEY `slug_3` (`slug`),
  ADD UNIQUE KEY `slug_4` (`slug`),
  ADD UNIQUE KEY `slug_5` (`slug`),
  ADD UNIQUE KEY `slug_6` (`slug`),
  ADD KEY `hero_img_id` (`hero_img_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cfp_filieres`
--
ALTER TABLE `cfp_filieres`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cfp_filieres`
--
ALTER TABLE `cfp_filieres`
  ADD CONSTRAINT `cfp_filieres_ibfk_1` FOREIGN KEY (`hero_img_id`) REFERENCES `cfp_files` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
