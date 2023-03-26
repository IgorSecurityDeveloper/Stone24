CREATE DATABASE
    IF NOT EXISTS StoneDB CHARACTER SET utf8 COLLATE utf8_general_ci;

USE StoneDB;

CREATE TABLE
    IF NOT EXISTS ticket (
        ticketNumber int(8) NOT NULL AUTO_INCREMENT,
        ticketType varchar(20) NOT NULL,
        priority_status varchar(20) NOT NULL,
        impact varchar(20) NOT NULL,
        contactMethod varchar(10) NOT NULL,
        userId int(10) NOT NULL,
        primary key (ticketNumber),
        foreign key (userId) references user(userID)
    );

CREATE TABLE
    IF NOT EXISTS user (
        userID int(10) NOT NULL AUTO_INCREMENT,
        userName varchar(255) NOT NULL,
        authCode int(6) NOT NULL,
        address varchar(255) NOT NULL,
        language varchar(255),
        password varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        role varchar(255) NOT NULL,
        userActive boolean NOT NULL,
        primary key (userID)
    );

CREATE TABLE
    IF NOT EXISTS analyst (
        analystID int(10) NOT NULL AUTO_INCREMENT,
        analystUserName varchar(255) NOT NULL,
        authCode int(6) NOT NULL,
        address varchar(255) NOT NULL,
        language varchar(255),
        password varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        role varchar(255) NOT NULL,
        userActive boolean NOT NULL,
        assignedTicket varchar(255),
        PRIMARY KEY (analystID)
    );

CREATE TABLE
    IF NOT EXISTS group_members (
        groupName varchar(255) NOT NULL,
        groupDescription varchar(255),
        groupMembers varchar(255),
        userId int(10) NOT NULL,
        Foreign Key (userId) references user(userID)
    );