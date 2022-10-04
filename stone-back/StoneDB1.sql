CREATE DATABASE IF NOT EXISTS StoneDB1
DEFAULT CHARSET=utf8
DEFAULT COLLATE=utf8_general_ci;

USE DATABASE StoneDB1;

CREATE TABLE UsersTab (
    Id int(10) unsigned NOT NULL auto_increment,
    Nome varchar(255) NOT NULL,
    Cargo varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    Senha varchar(255) NOT NULL
)

