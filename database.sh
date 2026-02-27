#!/bin/bash

apt update -y
apt install -y mariadb-server

systemctl enable mariadb
systemctl start mariadb

sed -i "s/^bind-address.*/bind-address = 0.0.0.0/" /etc/mysql/mariadb.conf.d/50-server.cnf

systemctl restart mariadb

mysql <<MYSQL_SCRIPT
CREATE DATABASE moodle DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'heralt'@'%' IDENTIFIED BY 'heralt';
GRANT ALL PRIVILEGES ON moodle.* TO 'heralt'@'%';
FLUSH PRIVILEGES;
MYSQL_SCRIPT

echo "=== DATABASE MOODLE SIAP ==="
