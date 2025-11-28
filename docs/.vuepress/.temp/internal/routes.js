export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"CodeOfAnotherWorld"} }],
  ["/event/Nature.html", { loader: () => import(/* webpackChunkName: "event_Nature.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/event/Nature.html.js"), meta: {"title":"环境事件"} }],
  ["/event/", { loader: () => import(/* webpackChunkName: "event_index.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/event/index.html.js"), meta: {"title":"宇宙事件"} }],
  ["/word/", { loader: () => import(/* webpackChunkName: "word_index.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/word/index.html.js"), meta: {"title":"世界"} }],
  ["/word/Situation.html", { loader: () => import(/* webpackChunkName: "word_Situation.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/word/Situation.html.js"), meta: {"title":"势力结构"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Develop/Doc/CodeOfAnotherWorld/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
