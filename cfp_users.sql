-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 19, 2026 at 10:09 AM
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
-- Table structure for table `cfp_users`
--

CREATE TABLE `cfp_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('admin','editor') NOT NULL,
  `profile_img` int(10) UNSIGNED DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cfp_users`
--

INSERT INTO `cfp_users` (`id`, `name`, `email`, `role`, `profile_img`, `is_active`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Admin User', 'admin@admin.com', 'admin', NULL, 1, '$2b$10$yOZjDlyU.KIba5rHojQG0.o9kyaXZ6AaPsqmUt9o.4CUBtNXy88V.', '2026-01-23 13:23:44', '2026-01-23 13:39:57', NULL),
(2, 'Audace Nkengurutse', 'nkengurutseaudace5@gmail.com', 'admin', NULL, 1, '$2b$10$7tOhwYxW2R.2l4AKRJhYZOMLdCaQeWstPlK6fZJ0aNr7pt9n4XDSS', '2026-01-26 09:11:21', '2026-01-26 09:11:21', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cfp_users`
--
ALTER TABLE `cfp_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD KEY `profile_img` (`profile_img`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cfp_users`
--
ALTER TABLE `cfp_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cfp_users`
--
ALTER TABLE `cfp_users`
  ADD CONSTRAINT `cfp_users_ibfk_1` FOREIGN KEY (`profile_img`) REFERENCES `cfp_files` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
