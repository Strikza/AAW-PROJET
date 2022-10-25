#!/bin/bash

echo Verification des outils pour la creation de la base MySQL
apt-get update
apt-get install mysql-server

echo Installation de la base
user=root
password=root
database=db_zoo
smysql --user="$user" --password="$password" --database="$database" --execute="DROP DATABASE IF EXISTS $database; CREATE DATABASE $database;"
