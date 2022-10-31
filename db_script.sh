#!/bin/bash

export $(grep -v '^#' ./projet_zoo-aaw/.env | xargs)

if [[ $? -eq 0 ]]
then

  echo Verification des outils pour la creation de la base MySQL

  if [[ $? -eq 0 ]]
  then

  apt-get update
  apt-get install mysql-server

    echo Montage de la base
    service mysql start
    mysql -h ${HOST} --user="${USER}" --password="${PASSWORD}" < "initialize_db.sql"

    if [[ $? -eq 0 ]]
    then
      echo La base est operationnelle
    else
      echo Echec du montage de la base
    fi

  else
      echo Echec lors de la verification des outils
  fi

else
    echo Echec lors du chargement des variables d\'environnement
fi