#!/bin/bash

# Korisnik unosi putanju do direktorijuma u koji će biti kloniran repozitorijum
echo "Unesite putanju do direktorijuma u koji želite klonirati repozitorijum:"
read directory_path

# Korisnik unosi URL repozitorijuma koji želi da klonira
echo "Unesite URL repozitorijuma koji želite klonirati:"
read repo_url

# Kloniranje repozitorijuma
git clone $repo_url $directory_path

# Prebacivanje u kreirani direktorijum
cd $directory_path

# Kreiranje grane test i prebacivanje na nju
git checkout -b test

# Kreiranje fajla i dodavanje sadržaja
touch neki_fajl.txt
echo "Ovo je sadržaj fajla" > neki_fajl.txt

# Dodavanje kreiranog fajla na staging
git add neki_fajl.txt

# Logovanje output-a "git status" komande u konzolu
git status | tee log.txt
