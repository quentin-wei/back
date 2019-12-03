#!/bin/bash

echo "获取最新代码"

git pull origin master

echo "添加"
git add .

echo "暂存"
git cm 'change code'

echo "提交"
git push origin master