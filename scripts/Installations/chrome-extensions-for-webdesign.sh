#!/bin/sh

for ext in $(cat ./requirements/chrome-extensions-for-webdesign.txt)
do
	xdg-open $ext
done
