#!/bin/bash

install_brew(){
	OS=`uname --kernel-name`
	if [ "${OS}" == "Drawin" ]
	then
		/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
	else
		test -d ~/.linuxbrew && eval "$(~/.linuxbrew/bin/brew shellenv)"
	  test -d /home/linuxbrew/.linuxbrew && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
	  test -r ~/.bash_profile && echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.bash_profile
	  echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.profile
	fi
}

brewIsNotInstalled= $(which -s brew)
if [["$brewIsNotInstalled"]] ; then
	install_brew
