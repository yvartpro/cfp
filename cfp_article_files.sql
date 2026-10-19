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
-- Table structure for table `cfp_article_files`
--

CREATE TABLE `cfp_article_files` (
  `id` int(10) UNSIGNED NOT NULL,
  `article_id` int(10) UNSIGNED NOT NULL,
  `file_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cfp_article_files`
--

INSERT INTO `cfp_article_files` (`id`, `article_id`, `file_id`) VALUES
(1, 1, 10),
(2, 1, 11),
(6, 2, 8),
(5, 2, 11),
(3, 2, 13),
(4, 2, 16);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cfp_article_files`
--
ALTER TABLE `cfp_article_files`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cfp_article_files_file_id_article_id_unique` (`article_id`,`file_id`),
  ADD KEY `file_id` (`file_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cfp_article_files`
--
ALTER TABLE `cfp_article_files`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cfp_article_files`
--
ALTER TABLE `cfp_article_files`
  ADD CONSTRAINT `cfp_article_files_ibfk_10` FOREIGN KEY (`file_id`) REFERENCES `cfp_files` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cfp_article_files_ibfk_9` FOREIGN KEY (`article_id`) REFERENCES `cfp_articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
