-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2019 at 06:48 PM
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
-- Table structure for table `classmaps`
--

CREATE TABLE `classmaps` (
  `jsonClassRoomString` longtext NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `classmaps`
--

INSERT INTO `classmaps` (`jsonClassRoomString`, `timestamp`, `username`) VALUES
('{\"attrs\":{\"width\":290,\"height\":465.84945112388914,\"scaleX\":0.15159435441714583,\"scaleY\":0.15159435441714583},\"className\":\"Stage\",\"children\":[{\"attrs\":{},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"x\":50,\"y\":50,\"width\":1913,\"height\":3073,\"src\":\"../assets/classroomLayouts/EmptyTC412.png\"},\"className\":\"Image\"},{\"attrs\":{\"x\":722.848275862069,\"y\":1593.5931034482758,\"width\":145,\"height\":142,\"draggable\":true,\"src\":\"../assets/classroomObjects/chair.png\"},\"className\":\"Image\"},{\"attrs\":{\"x\":294.07241379310346,\"y\":1210.993103448276,\"width\":337,\"height\":296,\"draggable\":true,\"src\":\"../assets/classroomObjects/table.png\"},\"className\":\"Image\"},{\"attrs\":{\"x\":802.0068965517243,\"y\":1375.9068965517242,\"width\":150,\"height\":150,\"draggable\":true,\"src\":\"../assets/classroomObjects/person.png\"},\"className\":\"Image\"}]}]}', '2019-02-21 14:28:37', 'zach@clearseries.com'),
('{\"attrs\":{\"width\":290,\"height\":465.84945112388914,\"scaleX\":0.15159435441714583,\"scaleY\":0.15159435441714583},\"className\":\"Stage\",\"children\":[{\"attrs\":{},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"x\":50,\"y\":50,\"width\":1913,\"height\":3073,\"src\":\"../assets/classroomLayouts/EmptyTC412.png\"},\"className\":\"Image\"},{\"attrs\":{\"x\":439.196551724138,\"y\":1718.9275862068966,\"width\":145,\"height\":142,\"draggable\":true,\"src\":\"../assets/classroomObjects/chair.png\",\"scaleY\":2.8384732587757826},\"className\":\"Image\"},{\"attrs\":{\"x\":769.0241379310344,\"y\":1666.1551724137933,\"width\":337,\"height\":296,\"draggable\":true,\"src\":\"../assets/classroomObjects/table.png\"},\"className\":\"Image\"},{\"attrs\":{\"x\":1477.3407377810365,\"y\":1340.784201220606,\"width\":150,\"height\":150,\"draggable\":true,\"src\":\"../assets/classroomObjects/person.png\",\"rotation\":93.3108148054566},\"className\":\"Image\"},{\"attrs\":{},\"className\":\"Transformer\"}]},{\"attrs\":{},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"x\":50,\"y\":50,\"width\":1913,\"height\":3073,\"src\":\"../assets/classroomLayouts/EmptyTC412.png\"},\"className\":\"Image\"},{\"attrs\":{\"x\":490.6108159747352,\"y\":1401.4645772090043,\"width\":150,\"height\":150,\"draggable\":true,\"src\":\"../assets/classroomObjects/person.png\",\"rotation\":2.2432285243938956,\"scaleX\":1.3824219778522358,\"scaleY\":1.3824219778522358},\"className\":\"Image\"},{\"attrs\":{},\"className\":\"Transformer\"}]}]}', '2019-02-21 14:31:02', 'zach@clearseries.com'),
('{\"attrs\":{\"width\":290,\"height\":465.84945112388914,\"scaleX\":0.15159435441714583,\"scaleY\":0.15159435441714583},\"className\":\"Stage\",\"children\":[{\"attrs\":{},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"x\":50,\"y\":50,\"width\":1913,\"height\":3073,\"src\":\"../assets/classroomLayouts/EmptyTC412.png\"},\"className\":\"Image\"},{\"attrs\":{\"x\":439.196551724138,\"y\":1718.9275862068966,\"width\":145,\"height\":142,\"draggable\":true,\"src\":\"../assets/classroomObjects/chair.png\",\"scaleY\":2.8384732587757826},\"className\":\"Image\"},{\"attrs\":{\"x\":663.4793103448276,\"y\":1725.5241379310346,\"width\":337,\"height\":296,\"draggable\":true,\"src\":\"../assets/classroomObjects/table.png\"},\"className\":\"Image\"},{\"attrs\":{\"x\":1167.3028067465534,\"y\":1756.3669598412955,\"width\":150,\"height\":150,\"draggable\":true,\"src\":\"../assets/classroomObjects/person.png\",\"rotation\":93.3108148054566},\"className\":\"Image\"},{\"attrs\":{},\"className\":\"Transformer\"}]},{\"attrs\":{},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"x\":50,\"y\":50,\"width\":1913,\"height\":3073,\"src\":\"../assets/classroomLayouts/EmptyTC412.png\"},\"className\":\"Image\"},{\"attrs\":{\"x\":426.00344827586207,\"y\":1309.941379310345,\"width\":145,\"height\":142,\"draggable\":true,\"src\":\"../assets/classroomObjects/chair.png\",\"scaleX\":2.8253837426700907,\"scaleY\":2.8253837426700903},\"className\":\"Image\"},{\"attrs\":{},\"className\":\"Transformer\"},{\"attrs\":{\"x\":696.462068965517,\"y\":1666.1551724137935,\"width\":337,\"height\":296,\"draggable\":true,\"src\":\"../assets/classroomObjects/table.png\"},\"className\":\"Image\"},{\"attrs\":{},\"className\":\"Transformer\"},{\"attrs\":{\"x\":994.7641644666744,\"y\":1417.5517252058514,\"width\":150,\"height\":150,\"draggable\":true,\"src\":\"../assets/classroomObjects/person.png\",\"rotation\":48.03506489372546},\"className\":\"Image\"},{\"attrs\":{},\"className\":\"Transformer\"},{\"attrs\":{\"x\":867.9724137931036,\"y\":1270.3620689655174,\"width\":150,\"height\":150,\"draggable\":true,\"src\":\"../assets/classroomObjects/person.png\"},\"className\":\"Image\"},{\"attrs\":{},\"className\":\"Transformer\"},{\"attrs\":{\"x\":432.6000000000001,\"y\":993.3068965517242,\"width\":145,\"height\":142,\"draggable\":true,\"src\":\"../assets/classroomObjects/chair.png\",\"scaleX\":1.7368432214399017,\"scaleY\":2.3906497919206986},\"className\":\"Image\"},{\"attrs\":{},\"className\":\"Transformer\"}]}]}', '2019-02-21 17:12:12', 'zach@clearseries.com');

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
('zach@clearseries.com', 'zach@clearseries.com', '$2y$10$LPg99mFIkqc5XKLE9J8nJuGpb3d8elBuTKTvR9n7Azex/3Lr/0Nai');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classmaps`
--
ALTER TABLE `classmaps`
  ADD KEY `username` (`username`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `username` (`username`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classmaps`
--
ALTER TABLE `classmaps`
  ADD CONSTRAINT `username` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
