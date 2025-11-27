import { defineClientConfig } from "vuepress/client";
import MarkMap from "D:/Develop/Doc/CodeOfAnotherWorld/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/MarkMap.js";
import Mermaid from "D:/Develop/Doc/CodeOfAnotherWorld/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("MarkMap", MarkMap);
    app.component("Mermaid", Mermaid);
  },
});
