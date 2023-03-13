#!/bin/sh
for formulae in $(cat ./requirements/brew-deps.txt)
do 
  brew install $formulae
done
