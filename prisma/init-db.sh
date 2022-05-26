#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    DROP DATABASE IF EXISTS onitama;
    
    CREATE DATABASE onitama;

    \c onitama;

    CREATE EXTENSION pgcrypto;

EOSQL
