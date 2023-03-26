CREATE DATABASE IF NOT EXIST StoneDB CHARACTER SET utf8 COLLATE utf8_general_ci;
USE StoneDB;

CREATE TABLE IF NOT EXISTS ticket (
ticketNumber int(8),
ticketType varchar(20),
priority varchar(20),
impact varchar(20),
contactMethod varchar(10),
primary key ticketNumber
);

