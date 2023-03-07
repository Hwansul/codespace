#!/bin/sh
BASE_URL="https://raw.githubusercontent.com/mindulle/codespace/main/snippets"
PATH_TO_FILE=`find ../snippets/ | sed 's|^../snippets/||'`

for path in ${PATH_TO_FILE}
do
  `curl $BASE_URL/$path | nap $path`
done

