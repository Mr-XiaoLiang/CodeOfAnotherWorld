# 安装 vuepress
npm install -D vuepress@next
# 安装打包工具和主题
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
# 搜索
npm install -D @vuepress/plugin-search
# 主题
npm install -D vuepress-theme-hope
# 图表
npm install -D @vuepress/plugin-markdown-chart
# 右侧目标锚点
npm install -D vuepress-plugin-anchor-right

# 修复依赖
npm audit fix

echo "依赖添加完成"