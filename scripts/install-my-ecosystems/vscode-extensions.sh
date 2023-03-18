#!/bin/sh

for ext in $(cat ./requirements/vscode-extensions.txt)
do
	code --install-extension $ext
done
