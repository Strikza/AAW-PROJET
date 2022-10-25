#!/bin/bash

export $(grep -v '^#' ./projet_zoo-aaw/.env | xargs)

echo Verification des outils pour la creation de la base MySQL
apt-get update
apt-get install mysql-server

echo Montage de la base
service mysql start
mysql -h ${HOST} --user="${USER}" --password="${PASSWORD}" < "initialize_db.sql"

echo La base est operationnelle
