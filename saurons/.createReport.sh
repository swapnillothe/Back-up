#! /bin/bash

git clone https://github.com/reshmisaji/myArrayFunctions_map_reduce_filter.git 
dirName=$(ls)
cd $dirName
report=$(mocha --reporter json)
cd -
echo $report>>report.json
rm -rf $dirName
