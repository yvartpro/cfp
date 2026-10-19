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
-- Table structure for table `cfp_articles`
--

CREATE TABLE `cfp_articles` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `excerpt` text DEFAULT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`content`)),
  `category` enum('GENERAL','FILIERE','SERVICE') NOT NULL DEFAULT 'GENERAL',
  `view_count` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `filiere_id` int(10) UNSIGNED DEFAULT NULL,
  `service_id` int(10) UNSIGNED DEFAULT NULL,
  `status` enum('DRAFT','PUBLISHED') NOT NULL DEFAULT 'DRAFT',
  `published_at` datetime DEFAULT NULL,
  `author_id` int(10) UNSIGNED NOT NULL,
  `hero_image_id` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cfp_articles`
--

INSERT INTO `cfp_articles` (`id`, `title`, `slug`, `excerpt`, `content`, `category`, `view_count`, `filiere_id`, `service_id`, `status`, `published_at`, `author_id`, `hero_image_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Journée Portes Ouvertes au Centre de Formation', 'journ-e-portes-ouvertes-au-centre-de-formation', 'Le centre a présenté ses différentes filières et services, permettant aux visiteurs de découvrir les formations, les ateliers pratiques et les équipements disponibles.', '{\"sections\":[{\"id\":\"main\",\"title\":\"Main Section\",\"blocks\":[{\"id\":\"1769248335357\",\"type\":\"text\",\"value\":\"<p><strong>Présentation de la journée</strong></p><p></p><p>Le Centre de Formation Professionnelle de Kigobe a organisé une journée portes ouvertes pour présenter ses filières et ses services. Les visiteurs ont pu découvrir les formations TIC, Mécanique Automobile, Agroalimentaire, et bien plus.</p><p></p><p><em>Accueil des visiteurs à l\'entrée principale</em></p>\"},{\"id\":\"1769248409047\",\"type\":\"gallery\",\"images\":[{\"fileId\":10,\"file\":{\"id\":10,\"original_name\":\"7C7A9165.JPG\",\"stored_name\":\"cfp_956245.webp\",\"path\":\"https://capbio.bi/cfp/uploads/cfp_956245.webp\",\"mime_type\":\"image/jpeg\",\"size\":246077,\"description\":null,\"uploaded_by\":1,\"createdAt\":\"2026-01-24T08:31:04.000Z\",\"updatedAt\":\"2026-01-24T08:31:04.000Z\",\"deletedAt\":null}},{\"fileId\":11,\"file\":{\"id\":11,\"original_name\":\"7C7A9167.JPG\",\"stored_name\":\"cfp_655303.webp\",\"path\":\"https://capbio.bi/cfp/uploads/cfp_655303.webp\",\"mime_type\":\"image/jpeg\",\"size\":213166,\"description\":null,\"uploaded_by\":1,\"createdAt\":\"2026-01-24T08:31:21.000Z\",\"updatedAt\":\"2026-01-24T08:31:21.000Z\",\"deletedAt\":null}}],\"layout\":\"grid-3\",\"source\":\"Atelier de formation en audiovisuel - nos eleves\"},{\"id\":\"1769248522507\",\"type\":\"text\",\"value\":\"<p><strong>Points forts de la visite</strong></p><p></p><p>Durant cette journée, les participants ont pu profiter de :</p><ul><li><p>Présentation des filières et services du centre</p></li><li><p>Démonstrations pratiques dans les ateliers</p></li><li><p>Rencontres avec les formateurs et étudiants</p></li><li><p>Visite des salles spécialisées et équipements</p></li><li><p>Session questions-réponses avec la direction</p></li></ul><p></p>\"}]}]}', 'GENERAL', 0, NULL, NULL, 'DRAFT', NULL, 1, 10, '2026-01-24 09:57:59', '2026-01-24 11:56:41', NULL),
(2, 'Restez connecté avec la vie du campus', 'assumenda-voluptatem-consectetur-iure-impedit-sunt-et-dolor', '\nRestez connecté avec la vie du campus, les événements académiques et les réussites de nos étudiants.', '{\"sections\":[{\"id\":\"main\",\"title\":\"Et dignissimos maiores consequat Quod aut sit dicta id in provident culpa enim molestiae\",\"blocks\":[{\"id\":\"1769265545169\",\"type\":\"text\",\"value\":\"<p>Similique ut fugiat, fugit, dolore at temporibus eum sapiente quaerat doloribus non consectetur, incididunt nulla officiis eaque quos amet, nisi irure totam qui perspiciatis, ut esse id et sit quibusd.</p>\"},{\"id\":\"1769265549958\",\"type\":\"image\",\"fileId\":13,\"file\":{\"id\":13,\"original_name\":\"7C7A9203 - Copie.JPG\",\"stored_name\":\"cfp_754175.webp\",\"path\":\"https://capbio.bi/cfp/uploads/cfp_754175.webp\",\"mime_type\":\"image/jpeg\",\"size\":201992,\"description\":null,\"uploaded_by\":1,\"createdAt\":\"2026-01-24T08:32:31.000Z\",\"updatedAt\":\"2026-01-24T08:32:31.000Z\",\"deletedAt\":null}},{\"id\":\"1769265555263\",\"type\":\"gallery\",\"images\":[{\"fileId\":16,\"file\":{\"id\":16,\"original_name\":\"7C7A9223.JPG\",\"stored_name\":\"cfp_439275.webp\",\"path\":\"https://capbio.bi/cfp/uploads/cfp_439275.webp\",\"mime_type\":\"image/jpeg\",\"size\":177892,\"description\":null,\"uploaded_by\":1,\"createdAt\":\"2026-01-24T08:33:19.000Z\",\"updatedAt\":\"2026-01-24T08:33:19.000Z\",\"deletedAt\":null}},{\"fileId\":11,\"file\":{\"id\":11,\"original_name\":\"7C7A9167.JPG\",\"stored_name\":\"cfp_655303.webp\",\"path\":\"https://capbio.bi/cfp/uploads/cfp_655303.webp\",\"mime_type\":\"image/jpeg\",\"size\":213166,\"description\":null,\"uploaded_by\":1,\"createdAt\":\"2026-01-24T08:31:21.000Z\",\"updatedAt\":\"2026-01-24T08:31:21.000Z\",\"deletedAt\":null}},{\"fileId\":8,\"file\":{\"id\":8,\"original_name\":\"7C7A9134.JPG\",\"stored_name\":\"cfp_465227.webp\",\"path\":\"https://capbio.bi/cfp/uploads/cfp_465227.webp\",\"mime_type\":\"image/jpeg\",\"size\":8638333,\"description\":null,\"uploaded_by\":1,\"createdAt\":\"2026-01-24T08:30:05.000Z\",\"updatedAt\":\"2026-01-24T08:30:05.000Z\",\"deletedAt\":null}}],\"layout\":\"grid-3\"}]}]}', 'FILIERE', 0, NULL, NULL, 'DRAFT', '2026-01-23 23:16:00', 1, 9, '2026-01-24 14:40:03', '2026-01-24 14:41:01', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cfp_articles`
--
ALTER TABLE `cfp_articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD UNIQUE KEY `slug_2` (`slug`),
  ADD UNIQUE KEY `slug_3` (`slug`),
  ADD UNIQUE KEY `slug_4` (`slug`),
  ADD UNIQUE KEY `slug_5` (`slug`),
  ADD UNIQUE KEY `slug_6` (`slug`),
  ADD KEY `filiere_id` (`filiere_id`),
  ADD KEY `service_id` (`service_id`),
  ADD KEY `author_id` (`author_id`),
  ADD KEY `hero_image_id` (`hero_image_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cfp_articles`
--
ALTER TABLE `cfp_articles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cfp_articles`
--
ALTER TABLE `cfp_articles`
  ADD CONSTRAINT `cfp_articles_ibfk_17` FOREIGN KEY (`filiere_id`) REFERENCES `cfp_filieres` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `cfp_articles_ibfk_18` FOREIGN KEY (`service_id`) REFERENCES `cfp_services` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `cfp_articles_ibfk_19` FOREIGN KEY (`author_id`) REFERENCES `cfp_users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `cfp_articles_ibfk_20` FOREIGN KEY (`hero_image_id`) REFERENCES `cfp_files` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
