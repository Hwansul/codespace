#!/bin/sh
### Clean exisiting snippets and cheatsheets

## Assign other values respectively in this variable where operating system you are working.
basedir_for_local="$HOME/.local/share"  # for WSL2 in windows 10
# basedir_for_local_app=path/to/dir           # for macOS

find $basedir_for_local/nap -type f -delete
find $basedir_for_local/navi/cheats/mindulle__codespace -type f -delete

### Sync snippets into local nap from remote repository. 
repo_url="https://github.com/hwansul/libs.git"

# clone the repository to a temporary directory and move to scripts directory.
temp_dir=$(mktemp -d)
cd $temp_dir
git clone $repo_url
cd libs/scripts

# get subdirectories of snippets directory.
sub_directories=$(find $temp_dir/libs/snippets/ -type f | sed "s|^$temp_dir/libs/snippets/||")

# save snippets into local nap client.
for dir in ${sub_directories}
do
  $(nap $dir < $temp_dir/libs/snippets/$dir)
done

# remove the temp directory.
cd ../..
rm -rf $temp_dir

### let users update local navi cheatsheet.
echo "Please run following command in your local machine:"
echo "navi repo add hwansul/libs"
