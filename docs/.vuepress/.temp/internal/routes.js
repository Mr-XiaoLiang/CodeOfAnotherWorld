export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/Plot.html", { loader: () => import(/* webpackChunkName: "Plot.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/Plot.html.js"), meta: {"title":"剧情"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"CodeOfAnotherWorld"} }],
  ["/idea/Nature.html", { loader: () => import(/* webpackChunkName: "idea_Nature.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/idea/Nature.html.js"), meta: {"title":"环境事件素材"} }],
  ["/word/Situation.html", { loader: () => import(/* webpackChunkName: "word_Situation.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/word/Situation.html.js"), meta: {"title":"势力结构"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
