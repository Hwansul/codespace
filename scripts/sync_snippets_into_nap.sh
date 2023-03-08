#!/bin/sh
repo_url="https://github.com/mindulle/codespace.git"

# clone the repository to a temporary directory and move to scripts directory.
temp_dir=$(mktemp -d)
cd $temp_dir
git clone $repo_url
cd codespace/scripts

# get subdirectories of snippets directory.
sub_directories=`find $temp_dir/codespace/snippets/ -type f | sed "s|^$temp_dir/codespace/snippets/||"`

# echo ${sub_directories}

# save snippets into local nap client.
for dir in ${sub_directories}
do
  `nap $dir < $temp_dir/codespace/snippets/$dir`
done

# remove the temp directory.
cd ../..
rm -rf $temp_dir
