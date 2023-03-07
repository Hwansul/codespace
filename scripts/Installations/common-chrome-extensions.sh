#!/bin/sh

for ext in $(cat ./requirements/common-chrome-extensions.txt)
do
	xdg-open $ext
done
