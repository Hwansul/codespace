#!/bin/sh

for app in $(cat ./requirements/personal-knowledge-management.txt)
do
	xdg-open $app
done
