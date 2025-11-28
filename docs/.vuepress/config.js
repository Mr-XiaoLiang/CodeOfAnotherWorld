import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from 'vuepress'
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart'
import { searchPlugin } from '@vuepress/plugin-search'

const vuePressOptions = {
  bundler: viteBundler(),
  theme: hopeTheme({
    // 开启侧边栏, 自动生成
    sidebar: "structure",
    navbar: [],
    navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Language", "Repo", "Outlook", "Search"],
    },
    plugins: {
        search: {},
    }
    //
  }),
  base: '/WorldWiki/',
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
    searchPlugin({
        // 配置项
        locales: {
            '/': {
                placeholder: 'Search',
            },
            '/zh/': {
                placeholder: '搜索',
            },
        },
    }),
  ],
}

export default defineUserConfig(vuePressOptions)
