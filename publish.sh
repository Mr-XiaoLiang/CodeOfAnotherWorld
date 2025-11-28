#!/usr/bin/env sh

REPO_URL="git@github.com:Mr-XiaoLiang/WorldWiki.git"
DEPLOY_BRANCH="main:main"
BUILD_CMD="npm run docs:build"
BUILD_DIR="pages"
PUBLISH_DIR="../PublishDocsTemp"

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
echo "执行构建命令: $BUILD_CMD"
$BUILD_CMD


# 进入生成的文件夹
cd $BUILD_DIR

# 记录当前目录（导出内容的目录）
OUTPUT_DIR=$(pwd)

# 将导出内容的目录，移动到当前构建目录的外侧（避免导出内容目录的 .git 目录和构建工程的 .git 目录冲突）
mv OUTPUT_DIR $PUBLISH_DIR

cd $PUBLISH_DIR

echo "发布目录: $PUBLISH_DIR"

#git init
#git add -A
#git commit -m 'deploy'
#
## 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:mqyqingfeng/learn-typescript.git master:gh-pages
#
#cd -
