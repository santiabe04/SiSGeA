CREATE DATABASE sisgea;
USE sisgea;

--CURRENCIES
CREATE TABLE currencies (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    iso CHAR(4) NOT NULL,
    disabledStatus INT NOT NULL DEFAULT 0
);

--WALLETS
CREATE TABLE wallets (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    balance DECIMAL(20,2) NOT NULL DEFAULT 0.00,
    currency INT NOT NULL,
    disabledStatus INT NOT NULL DEFAULT 0
);

--MOVEMENT_KINDS
CREATE TABLE movement_kinds (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    detail TINYTEXT,
    disabledStatus INT NOT NULL DEFAULT 0
);

--MOVEMENTS
CREATE TABLE movements (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    detail TINYTEXT,
    amount DECIMAL(20,2) NOT NULL,
    type INT NOT NULL,
    datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    currency INT NOT NULL,
    --user INT NOT NULL,
    wallet INT NOT NULL,
    kind INT NOT NULL
);

--EVENT_KINDS
CREATE TABLE event_kinds (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    detail TINYTEXT,
    disabledStatus INT NOT NULL DEFAULT 0
);

--EVENTS
CREATE TABLE events (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    detail TINYTEXT,
    date DATE NOT NULL,
    date_end DATE NOT NULL,
    time TIME NOT NULL,
    time_end TIME NOT NULL,
<<<<<<< Updated upstream
    kind INT NOT NULL,
    disabledStatus INT NOT NULL DEFAULT 0
=======
    kind INT NOT NULL
>>>>>>> Stashed changes
);

--MEASUREMENT_UNITS
CREATE TABLE measurement_units (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    detail TINYTEXT,
<<<<<<< Updated upstream
    short VARCHAR(4) NOT NULL,
    disabledStatus INT NOT NULL DEFAULT 0
=======
    short VARCHAR(4) NOT NULL
>>>>>>> Stashed changes
);

--SUPPLY_KINDS
CREATE TABLE supply_kinds (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    detail TINYTEXT,
<<<<<<< Updated upstream
    measurement_unit INT NOT NULL,
    disabledStatus INT NOT NULL DEFAULT 0
=======
    measurement_unit INT NOT NULL
>>>>>>> Stashed changes
);

--INVENTORY_LOCATIONS
CREATE TABLE inventory_locations (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
<<<<<<< Updated upstream
    detail TINYTEXT,
    disabledStatus INT NOT NULL DEFAULT 0
=======
    detail TINYTEXT
>>>>>>> Stashed changes
);

--INVENTORY
CREATE TABLE inventory (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    supply_kind INT NOT NULL,
    location INT NOT NULL,
    quantity DECIMAL(20,2) NOT NULL,
<<<<<<< Updated upstream
    update_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    disabledStatus INT NOT NULL DEFAULT 0
=======
    update_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
>>>>>>> Stashed changes
);