-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2019 at 01:45 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `icdc`
--

-- --------------------------------------------------------

--
-- Table structure for table `classmap`
--

CREATE TABLE `classmap` (
  `creatorId` int(11) NOT NULL,
  `numberOfStudents` int(11) NOT NULL,
  `classId` int(11) NOT NULL,
  `jsonOfClassRoomSetting` varchar(255) NOT NULL,
  `idOfScheme` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `infoofscheme`
--

CREATE TABLE `infoofscheme` (
  `idOfScheme` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `email`, `password`) VALUES
('test', 'test@test.com', '$2y$10$tXRrXqpNwK4jtbF1w5pl.OSQ5guooB3sggcCXc38svkca/bnip1NO'),
('testtest', 'newtest@test.com', '$2y$10$4MUcHQ0PNIwAUtoMwwXb8OalqeUpAllCjayNu/X5tnfhMTRre2rg6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classmap`
--
ALTER TABLE `classmap`
  ADD UNIQUE KEY `idOfScheme` (`idOfScheme`);

--
-- Indexes for table `infoofscheme`
--
ALTER TABLE `infoofscheme`
  ADD PRIMARY KEY (`idOfScheme`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
