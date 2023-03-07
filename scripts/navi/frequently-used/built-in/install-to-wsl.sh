#!/bin/sh
# use an ssh agent in wsl with your ssh setup in windows
# This commands make your machine don't require password whenever you run commands that need a password.
sudo apt -y install keychain
/usr/bin/keychain --nogui $HOME/.ssh/id_rsa
cat ~/.keychain/$(hostname)-sh
source ~/.keychain/$(hostname)-sh

# install xdg-open on WSL2
pip3 install --user git+https://github.com/cpbotha/xdg-open-wsl.git
