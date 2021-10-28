CREATE DATABASE IF NOT EXISTS forwardsca;

CREATE TABLE IF NOT EXISTS users(
    user_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `user_name` VARCHAR(20) NOT NULL UNIQUE,
    `password` VARCHAR(20) NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT 1
);

INSERT INTO users(user_name, password) VALUES('camilo', '123');

CREATE TABLE IF NOT EXISTS companies(
    company_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `rut` VARCHAR(10) NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT 1,
    contact_name VARCHAR(50) NOT NULL,
    contact_email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS shipments (
    shipment_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    c_containers INTEGER UNSIGNED NOT NULL DEFAULT 0,
    company_id INTEGER UNSIGNED NOT NULL,
    zarpe_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    arrival_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    finshed TINYINT(1) NOT NULL DEFAULT 0,
    active TINYINT(1) NOT NULL DEFAULT 1
);

INSERT INTO shipments (company_id, c_containers, arrival_at)
VALUES
(1, 50, '2021-12-10'),
(2, 50, '2021-12-10'),
(3, 50, '2021-12-10'),
(1, 110, '2021-11-10'),
(1, 50, '2021-12-10'),
(1, 100, '2021-12-20'),
(1, 80, '2021-12-1'),
(5, 50, '2021-12-10')

INSERT INTO companies (name , rut, contact_name, contact_email)
VALUES('Antong Holdings', '123456789', 'Luiciana Limarez', 'luicianolimares@example.com'),
('CMA CGM', '123123123', 'Elmer Figueroa Arce', 'nosoychayanne@example.com'),
('Cosco Shipping', '147258369', 'Cuzco Jackson', 'cuzcojackson@example.com'),
('Evergreen Line', '654321789', 'Hernan Velazques', 'everchile@evergrennexample.cl'),
('Hamburg Sud', '204510701', 'Tahiel Leone', 'tleone@example.com'),
('Hapag-Lloyd', '111222333','Charlotte Carrasco', 'charrasco@example.com'),
('Hyundai', '200111222', 'Liu Rizzo', 'liuzzo@example.com'),
('IRISL Group', '101420357', 'Martin Martini', 'mamartini@example.com'),
('KMTC', '146527380', 'Constanza Schwarz', 'cschawrz@example.com'),
('Maersk', '852852852', 'Camila Bauer', 'camilab@example.com'),
('MSC', '456546456', 'Maxwell Sevillano Carrasco', 'max@example.com'),
('One', '111111111', 'One Uno', 'one1@example.br');