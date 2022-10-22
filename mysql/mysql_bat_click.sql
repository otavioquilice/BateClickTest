create database bate_click;

use bate_click;

CREATE TABLE IF NOT EXISTS carros (
    id SMALLINT PRIMARY KEY AUTO_INCREMENT,
    uuid VARCHAR(255) NULL,
	ano DATE NOT NULL,
	modelo DATE NOT NULL,
	fabricante Varchar(50) NOT NULL,
	preco DECIMAL (10, 2) NOT NULL,
    created_at DATETIME null,
	updated_at DATETIME null,
	deleted_at DATETIME null
);

CREATE TABLE IF NOT EXISTS defeitos (

    id SMALLINT PRIMARY KEY AUTO_INCREMENT,
	uuid VARCHAR(255) NULL,
    defeito VARCHAR(255),
    id_carro SMALLINT NOT NULL,
	created_at DATETIME null,
	updated_at DATETIME null,
	deleted_at DATETIME null,
    
    CONSTRAINT fk_CarroDefeito FOREIGN KEY (id_carro) REFERENCES carros (id)
);

