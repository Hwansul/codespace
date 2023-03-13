#!/bin/sh
### Clean exisiting snippets and cheatsheets

## Assign each other values in this variable where operating system you are working.
basedir_for_local_app="$HOME/.local/share"  # for WSL2 in windows 10
# basedir_for_local_app=path/to/dir           # for macOS

find $basedir_for_local_app/nap -type f -delete
find $basedir_for_local_app/navi/cheats/mindulle__codespace -type f -delete

### Sync snippets into local nap from remote repository. 
repo_url="https://github.com/mindulle/codespace.git"

# clone the repository to a temporary directory and move to scripts directory.
temp_dir=$(mktemp -d)
cd $temp_dir
git clone $repo_url
cd codespace/scripts

# get subdirectories of snippets directory.
sub_directories=$(find $temp_dir/codespace/snippets/ -type f | sed "s|^$temp_dir/codespace/snippets/||")

# save snippets into local nap client.
for dir in ${sub_directories}
do
  `nap $dir < $temp_dir/codespace/snippets/$dir`
done

# remove the temp directory.
cd ../..
rm -rf $temp_dir


### Update local navi cheatsheet
navi repo add mindulle/codespace
