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

# 退回去
cd ..

# 删除旧的发布目录
rm -rf "$PUBLISH_DIR"

# 将导出内容的目录，移动到当前构建目录的外侧（避免导出内容目录的 .git 目录和构建工程的 .git 目录冲突）
mv "$OUTPUT_DIR" "$PUBLISH_DIR"

# 复制Bing的站点认证文件
cp ./site_auth/BingSiteAuth.xml "$PUBLISH_DIR"
# 复制Google的站点认证文件
cp ./site_auth/google447088e32261c4cf.html "$PUBLISH_DIR"

# 进入发布目录
cd "$PUBLISH_DIR"

# 记录当前目录（导出内容的目录）
PUBLISH_DIR=$(pwd)

echo "发布目录: $PUBLISH_DIR"

git init
git branch -m main
git add -A
git commit -m 'publish'

# 通关Git发布
git push -f "$REPO_URL" "$DEPLOY_BRANCH"

# 回到最初的目录
cd -

rm -rf "$PUBLISH_DIR"
