-- Create database
CREATE DATABASE transport_company_db;

-- Use database
USE transport_company_db;

-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL
);

-- Sample data
INSERT INTO users (username, password, role) VALUES
('manager1', 'manager123', 'MANAGER'),
('employee1', 'employee123', 'EMPLOYEE'),
('driver1', 'driver123', 'DRIVER'),
('customer1', 'customer123', 'CUSTOMER');
