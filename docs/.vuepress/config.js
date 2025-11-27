import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart'


export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  base: '/pages/',
  dest: '${sourceDir}/../pages',
  title: '代码的另一个世界',
  plugins: [
    markdownChartPlugin({
        // 启用 Markmap
        markmap: true,
        // 启用 Mermaid
        mermaid: true,
        // 启用 PlantUML
        plantuml: true,
    }),
  ],
})