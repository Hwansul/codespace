#!/bin/sh

for ext in $(cat ./requirements/chrome-extensions-for-webdev.txt)
do
	xdg-open $ext
done
