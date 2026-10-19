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
-- Table structure for table `cfp_files`
--

CREATE TABLE `cfp_files` (
  `id` int(10) UNSIGNED NOT NULL,
  `original_name` varchar(255) NOT NULL,
  `stored_name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `mime_type` varchar(255) NOT NULL,
  `size` int(10) UNSIGNED NOT NULL,
  `description` text DEFAULT NULL,
  `uploaded_by` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `use_as` enum('banner','carousel','logo','head_message','about') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cfp_files`
--

INSERT INTO `cfp_files` (`id`, `original_name`, `stored_name`, `path`, `mime_type`, `size`, `description`, `uploaded_by`, `createdAt`, `updatedAt`, `deletedAt`, `use_as`) VALUES
(1, '7C7A8916.JPG', 'cfp_378081.webp', '/uploads/cfp_378081.webp', 'image/jpeg', 6713686, NULL, 1, '2026-01-23 13:41:29', '2026-01-23 13:41:29', NULL, NULL),
(2, '7C7A8935.JPG', 'cfp_6645.webp', '/uploads/cfp_6645.webp', 'image/jpeg', 7089474, NULL, 1, '2026-01-24 08:17:46', '2026-01-24 08:17:46', NULL, NULL),
(3, '7C7A8940.JPG', 'cfp_414516.webp', '/uploads/cfp_414516.webp', 'image/jpeg', 5555857, NULL, 1, '2026-01-24 08:18:43', '2026-01-24 08:18:43', NULL, NULL),
(4, '7C7A8960.JPG', 'cfp_322993.webp', '/uploads/cfp_322993.webp', 'image/jpeg', 6066907, NULL, 1, '2026-01-24 08:28:50', '2026-01-28 20:19:15', '2026-01-28 20:19:15', NULL),
(5, '7C7A8961.JPG', 'cfp_410783.webp', '/uploads/cfp_410783.webp', 'image/jpeg', 5688063, NULL, 1, '2026-01-24 08:29:03', '2026-01-28 20:19:20', '2026-01-28 20:19:20', NULL),
(6, '7C7A9010.JPG', 'cfp_378048.webp', '/uploads/cfp_378048.webp', 'image/jpeg', 6587350, NULL, 1, '2026-01-24 08:29:18', '2026-01-28 18:38:42', '2026-01-28 18:38:42', NULL),
(7, '7C7A9127.JPG', 'cfp_50452.webp', '/uploads/cfp_50452.webp', 'image/jpeg', 8178552, NULL, 1, '2026-01-24 08:29:36', '2026-01-28 18:51:20', NULL, 'carousel'),
(8, '7C7A9134.JPG', 'cfp_465227.webp', '/uploads/cfp_465227.webp', 'image/jpeg', 8638333, NULL, 1, '2026-01-24 08:30:05', '2026-01-28 18:51:16', NULL, 'carousel'),
(9, '7C7A9135.JPG', 'cfp_137552.webp', '/uploads/cfp_137552.webp', 'image/jpeg', 9338755, NULL, 1, '2026-01-24 08:30:28', '2026-01-28 18:51:11', NULL, 'carousel'),
(10, '7C7A9165.JPG', 'cfp_956245.webp', '/uploads/cfp_956245.webp', 'image/jpeg', 246077, NULL, 1, '2026-01-24 08:31:04', '2026-01-28 18:51:07', NULL, 'carousel'),
(11, '7C7A9167.JPG', 'cfp_655303.webp', '/uploads/cfp_655303.webp', 'image/jpeg', 213166, NULL, 1, '2026-01-24 08:31:21', '2026-01-24 08:31:21', NULL, NULL),
(12, '7C7A9202.JPG', 'cfp_173336.webp', '/uploads/cfp_173336.webp', 'image/jpeg', 197112, NULL, 1, '2026-01-24 08:32:01', '2026-01-24 08:32:01', NULL, NULL),
(13, '7C7A9203 - Copie.JPG', 'cfp_754175.webp', '/uploads/cfp_754175.webp', 'image/jpeg', 201992, NULL, 1, '2026-01-24 08:32:31', '2026-01-24 08:32:31', NULL, NULL),
(14, '7C7A9209.JPG', 'cfp_623556.webp', '/uploads/cfp_623556.webp', 'image/jpeg', 210360, NULL, 1, '2026-01-24 08:32:47', '2026-01-24 08:32:47', NULL, NULL),
(15, '7C7A9211 - Copie.JPG', 'cfp_215177.webp', '/uploads/cfp_215177.webp', 'image/jpeg', 219510, NULL, 1, '2026-01-24 08:33:05', '2026-01-24 08:33:05', NULL, NULL),
(16, '7C7A9223.JPG', 'cfp_439275.webp', '/uploads/cfp_439275.webp', 'image/jpeg', 177892, NULL, 1, '2026-01-24 08:33:19', '2026-01-24 08:33:19', NULL, NULL),
(17, '7C7A9227 - Copie.JPG', 'cfp_360556.webp', '/uploads/cfp_360556.webp', 'image/jpeg', 250841, NULL, 1, '2026-01-24 08:33:38', '2026-01-24 08:33:38', NULL, NULL),
(18, '7C7A9224.JPG', 'cfp_718277.webp', '/uploads/cfp_718277.webp', 'image/jpeg', 184686, NULL, 1, '2026-01-24 08:33:54', '2026-01-24 08:33:54', NULL, NULL),
(19, '7C7A9158.JPG', 'cfp_132114.webp', '/uploads/cfp_132114.webp', 'image/jpeg', 205966, NULL, 2, '2026-01-28 20:19:01', '2026-01-28 20:19:09', '2026-01-28 20:19:09', NULL),
(20, 'DSC01254.JPG', 'cfp_316763.webp', '/uploads/cfp_316763.webp', 'image/jpeg', 366017, NULL, 2, '2026-01-28 20:34:49', '2026-01-28 20:34:49', NULL, NULL),
(21, 'DSC01255.JPG', 'cfp_220367.webp', '/uploads/cfp_220367.webp', 'image/jpeg', 365750, NULL, 2, '2026-01-28 20:34:50', '2026-01-28 20:34:50', NULL, NULL),
(22, 'DSC01256.JPG', 'cfp_364833.webp', '/uploads/cfp_364833.webp', 'image/jpeg', 399046, NULL, 2, '2026-01-28 20:34:51', '2026-01-28 20:34:51', NULL, NULL),
(23, 'DSC01257.JPG', 'cfp_616696.webp', '/uploads/cfp_616696.webp', 'image/jpeg', 398381, NULL, 2, '2026-01-28 20:34:53', '2026-01-28 20:34:53', NULL, NULL),
(24, 'DSC01258.JPG', 'cfp_428741.webp', '/uploads/cfp_428741.webp', 'image/jpeg', 404936, NULL, 2, '2026-01-28 20:34:54', '2026-01-28 20:34:54', NULL, NULL),
(25, 'DSC01261.JPG', 'cfp_34718.webp', '/uploads/cfp_34718.webp', 'image/jpeg', 321182, NULL, 2, '2026-01-28 20:34:56', '2026-01-28 20:34:56', NULL, NULL),
(26, 'DSC01271.JPG', 'cfp_951039.webp', '/uploads/cfp_951039.webp', 'image/jpeg', 345790, NULL, 2, '2026-01-28 20:34:57', '2026-01-28 20:34:57', NULL, NULL),
(27, 'DSC01282.JPG', 'cfp_527547.webp', '/uploads/cfp_527547.webp', 'image/jpeg', 375622, NULL, 2, '2026-01-28 20:34:59', '2026-01-28 20:34:59', NULL, NULL),
(28, 'DSC01283.JPG', 'cfp_957223.webp', '/uploads/cfp_957223.webp', 'image/jpeg', 331961, NULL, 2, '2026-01-28 20:35:00', '2026-01-28 20:35:00', NULL, NULL),
(29, 'DSC01284.JPG', 'cfp_256398.webp', '/uploads/cfp_256398.webp', 'image/jpeg', 283041, NULL, 2, '2026-01-28 20:35:01', '2026-01-28 20:35:01', NULL, NULL),
(30, 'DSC01294.JPG', 'cfp_838656.webp', '/uploads/cfp_838656.webp', 'image/jpeg', 335318, NULL, 2, '2026-01-28 20:35:02', '2026-01-28 20:35:02', NULL, NULL),
(31, 'DSC01302.JPG', 'cfp_373912.webp', '/uploads/cfp_373912.webp', 'image/jpeg', 402585, NULL, 2, '2026-01-28 20:35:03', '2026-01-28 20:35:03', NULL, NULL),
(32, 'DSC01326.JPG', 'cfp_229630.webp', '/uploads/cfp_229630.webp', 'image/jpeg', 394848, NULL, 2, '2026-01-28 20:35:05', '2026-01-28 20:35:05', NULL, NULL),
(33, 'DSC01339.JPG', 'cfp_312900.webp', '/uploads/cfp_312900.webp', 'image/jpeg', 403621, NULL, 2, '2026-01-28 20:35:06', '2026-01-28 20:35:06', NULL, NULL),
(34, 'DSC01346.JPG', 'cfp_296245.webp', '/uploads/cfp_296245.webp', 'image/jpeg', 340494, NULL, 2, '2026-01-28 20:35:07', '2026-01-28 20:35:07', NULL, NULL),
(35, '20260114_114640.jpg', 'cfp_814544.webp', '/uploads/cfp_814544.webp', 'image/jpeg', 1692159, NULL, 2, '2026-01-28 20:36:04', '2026-01-28 20:36:04', NULL, NULL),
(36, '20260114_114644.jpg', 'cfp_360075.webp', '/uploads/cfp_360075.webp', 'image/jpeg', 1709292, NULL, 2, '2026-01-28 20:36:08', '2026-01-28 20:36:08', NULL, NULL),
(37, 'DSC01175.JPG', 'cfp_91579.webp', '/uploads/cfp_91579.webp', 'image/jpeg', 385354, NULL, 2, '2026-01-28 20:36:09', '2026-01-28 20:36:09', NULL, NULL),
(38, 'DSC01241.JPG', 'cfp_693646.webp', '/uploads/cfp_693646.webp', 'image/jpeg', 305335, NULL, 2, '2026-01-28 20:36:10', '2026-01-28 20:36:10', NULL, NULL),
(39, 'DSC01242.JPG', 'cfp_159311.webp', '/uploads/cfp_159311.webp', 'image/jpeg', 322870, NULL, 2, '2026-01-28 20:36:12', '2026-01-28 20:36:12', NULL, NULL),
(40, '7C7A9224.JPG', 'cfp_138567.webp', '/uploads/cfp_138567.webp', 'image/jpeg', 184686, NULL, 2, '2026-01-28 20:36:32', '2026-01-28 20:36:32', NULL, NULL),
(41, '7C7A9202 - Copie - Copie.JPG', 'cfp_865020.webp', '/uploads/cfp_865020.webp', 'image/jpeg', 197112, NULL, 2, '2026-01-28 20:36:50', '2026-01-28 20:36:50', NULL, NULL),
(42, '7C7A9211 - Copie - Copie.JPG', 'cfp_735045.webp', '/uploads/cfp_735045.webp', 'image/jpeg', 219510, NULL, 2, '2026-01-28 20:36:51', '2026-01-28 20:36:51', NULL, NULL),
(43, '20251216_110513.00_42_07_10.Still019.jpg', 'cfp_337753.webp', '/uploads/cfp_337753.webp', 'image/jpeg', 133272, NULL, 2, '2026-01-31 06:05:29', '2026-01-31 06:05:29', NULL, NULL),
(44, '20251216_110513.00_40_40_01.Still014.jpg', 'cfp_585960.webp', '/uploads/cfp_585960.webp', 'image/jpeg', 140261, NULL, 2, '2026-01-31 06:05:30', '2026-01-31 06:05:30', NULL, NULL),
(45, '20251216_110513.00_41_00_05.Still015.jpg', 'cfp_205837.webp', '/uploads/cfp_205837.webp', 'image/jpeg', 145491, NULL, 2, '2026-01-31 06:05:31', '2026-01-31 06:05:31', NULL, NULL),
(46, '20251216_110513.00_42_01_27.Still018.jpg', 'cfp_218468.webp', '/uploads/cfp_218468.webp', 'image/jpeg', 147880, NULL, 2, '2026-01-31 06:05:32', '2026-01-31 06:05:32', NULL, NULL),
(47, '20251216_110513.00_39_56_00.Still011.jpg', 'cfp_736811.webp', '/uploads/cfp_736811.webp', 'image/jpeg', 154945, NULL, 2, '2026-01-31 06:05:33', '2026-01-31 06:05:33', NULL, NULL),
(48, '20251216_110513.00_41_38_15.Still016.jpg', 'cfp_199061.webp', '/uploads/cfp_199061.webp', 'image/jpeg', 155873, NULL, 2, '2026-01-31 06:05:34', '2026-01-31 06:05:34', NULL, NULL),
(49, '20251216_110513.00_40_05_07.Still012.jpg', 'cfp_212408.webp', '/uploads/cfp_212408.webp', 'image/jpeg', 157609, NULL, 2, '2026-01-31 06:05:35', '2026-01-31 06:05:35', NULL, NULL),
(50, '20251216_110513.00_40_27_00.Still013.jpg', 'cfp_266257.webp', '/uploads/cfp_266257.webp', 'image/jpeg', 159548, NULL, 2, '2026-01-31 06:05:35', '2026-01-31 06:05:35', NULL, NULL),
(51, '20251216_110513.00_42_12_07.Still020.jpg', 'cfp_772604.webp', '/uploads/cfp_772604.webp', 'image/jpeg', 164563, NULL, 2, '2026-01-31 06:05:36', '2026-01-31 06:05:36', NULL, NULL),
(52, '20251216_110513.00_41_49_28.Still017.jpg', 'cfp_938279.webp', '/uploads/cfp_938279.webp', 'image/jpeg', 174014, NULL, 2, '2026-01-31 06:05:37', '2026-01-31 06:05:37', NULL, NULL),
(53, '20251216_110513.00_29_33_06.Still033.jpg', 'cfp_498449.webp', '/uploads/cfp_498449.webp', 'image/jpeg', 56836, NULL, 2, '2026-01-31 06:06:16', '2026-01-31 06:06:16', NULL, NULL),
(54, '20251216_110513.00_26_44_23.Still028.jpg', 'cfp_950170.webp', '/uploads/cfp_950170.webp', 'image/jpeg', 57909, NULL, 2, '2026-01-31 06:06:17', '2026-01-31 06:06:17', NULL, NULL),
(55, '20251216_110513.00_23_21_26.Still024.jpg', 'cfp_300901.webp', '/uploads/cfp_300901.webp', 'image/jpeg', 59223, NULL, 2, '2026-01-31 06:06:17', '2026-01-31 06:06:17', NULL, NULL),
(56, '20251216_110513.00_29_47_03.Still034.jpg', 'cfp_906062.webp', '/uploads/cfp_906062.webp', 'image/jpeg', 60387, NULL, 2, '2026-01-31 06:06:18', '2026-01-31 06:06:18', NULL, NULL),
(57, '20251216_110513.00_27_52_28.Still029.jpg', 'cfp_364631.webp', '/uploads/cfp_364631.webp', 'image/jpeg', 60425, NULL, 2, '2026-01-31 06:06:18', '2026-01-31 06:06:18', NULL, NULL),
(58, '20251216_110513.00_28_25_14.Still030.jpg', 'cfp_175833.webp', '/uploads/cfp_175833.webp', 'image/jpeg', 60792, NULL, 2, '2026-01-31 06:06:19', '2026-01-31 06:06:19', NULL, NULL),
(59, '20251216_110513.00_25_07_06.Still026.jpg', 'cfp_738519.webp', '/uploads/cfp_738519.webp', 'image/jpeg', 61504, NULL, 2, '2026-01-31 06:06:20', '2026-01-31 06:06:20', NULL, NULL),
(60, '20251216_110513.00_23_43_17.Still025.jpg', 'cfp_490866.webp', '/uploads/cfp_490866.webp', 'image/jpeg', 64822, NULL, 2, '2026-01-31 06:06:21', '2026-01-31 06:06:21', NULL, NULL),
(61, '20251216_110513.00_29_09_21.Still032.jpg', 'cfp_869839.webp', '/uploads/cfp_869839.webp', 'image/jpeg', 65540, NULL, 2, '2026-01-31 06:06:21', '2026-01-31 06:06:21', NULL, NULL),
(62, '20251216_110513.00_26_21_16.Still027.jpg', 'cfp_389994.webp', '/uploads/cfp_389994.webp', 'image/jpeg', 69772, NULL, 2, '2026-01-31 06:06:22', '2026-01-31 06:06:22', NULL, NULL),
(63, '20251216_110513.00_29_03_03.Still031.jpg', 'cfp_2780.webp', '/uploads/cfp_2780.webp', 'image/jpeg', 72784, NULL, 2, '2026-01-31 06:06:22', '2026-01-31 06:06:22', NULL, NULL),
(64, '20251216_110513.00_21_05_17.Still021.jpg', 'cfp_890116.webp', '/uploads/cfp_890116.webp', 'image/jpeg', 127090, NULL, 2, '2026-01-31 06:06:23', '2026-01-31 06:06:23', NULL, NULL),
(65, '20251216_110513.00_22_19_27.Still022.jpg', 'cfp_195699.webp', '/uploads/cfp_195699.webp', 'image/jpeg', 146020, NULL, 2, '2026-01-31 06:06:24', '2026-01-31 06:06:24', NULL, NULL),
(66, '20251216_110513.00_22_44_21.Still023.jpg', 'cfp_858396.webp', '/uploads/cfp_858396.webp', 'image/jpeg', 158711, NULL, 2, '2026-01-31 06:06:24', '2026-01-31 06:06:24', NULL, NULL),
(67, '20251216_110513.00_38_33_09.Still005.jpg', 'cfp_90530.webp', '/uploads/cfp_90530.webp', 'image/jpeg', 85316, NULL, 2, '2026-01-31 06:07:54', '2026-01-31 06:07:54', NULL, NULL),
(68, '20251216_110513.00_39_28_24.Still009.jpg', 'cfp_919209.webp', '/uploads/cfp_919209.webp', 'image/jpeg', 110530, NULL, 2, '2026-01-31 06:07:54', '2026-01-31 06:07:54', NULL, NULL),
(69, '20251216_110513.00_38_45_08.Still006.jpg', 'cfp_335091.webp', '/uploads/cfp_335091.webp', 'image/jpeg', 111320, NULL, 2, '2026-01-31 06:07:55', '2026-01-31 06:07:55', NULL, NULL),
(70, '20251216_110513.00_39_42_28.Still010.jpg', 'cfp_642888.webp', '/uploads/cfp_642888.webp', 'image/jpeg', 128169, NULL, 2, '2026-01-31 06:07:58', '2026-01-31 06:07:58', NULL, NULL),
(71, '20251216_110513.00_39_13_00.Still007.jpg', 'cfp_31271.webp', '/uploads/cfp_31271.webp', 'image/jpeg', 158062, NULL, 2, '2026-01-31 06:07:59', '2026-01-31 06:07:59', NULL, NULL),
(72, '20251216_110513.00_39_21_05.Still008.jpg', 'cfp_19488.webp', '/uploads/cfp_19488.webp', 'image/jpeg', 159808, NULL, 2, '2026-01-31 06:08:00', '2026-01-31 06:08:00', NULL, NULL),
(73, '20251216_110513.00_34_32_08.Still004.jpg', 'cfp_487578.webp', '/uploads/cfp_487578.webp', 'image/jpeg', 137806, NULL, 2, '2026-01-31 06:08:23', '2026-01-31 06:08:23', NULL, NULL),
(74, '20251216_110513.00_31_29_21.Still003.jpg', 'cfp_765423.webp', '/uploads/cfp_765423.webp', 'image/jpeg', 130267, NULL, 2, '2026-01-31 06:08:34', '2026-01-31 06:08:34', NULL, NULL),
(75, '20251216_110513.00_30_51_26.Still002.jpg', 'cfp_493920.webp', '/uploads/cfp_493920.webp', 'image/jpeg', 147801, NULL, 2, '2026-01-31 06:08:35', '2026-01-31 06:08:35', NULL, NULL),
(76, '20251216_110513.00_30_18_20.Still001.jpg', 'cfp_799014.webp', '/uploads/cfp_799014.webp', 'image/jpeg', 167317, NULL, 2, '2026-01-31 06:08:36', '2026-01-31 06:08:36', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cfp_files`
--
ALTER TABLE `cfp_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `uploaded_by` (`uploaded_by`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cfp_files`
--
ALTER TABLE `cfp_files`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cfp_files`
--
ALTER TABLE `cfp_files`
  ADD CONSTRAINT `cfp_files_ibfk_1` FOREIGN KEY (`uploaded_by`) REFERENCES `cfp_users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
