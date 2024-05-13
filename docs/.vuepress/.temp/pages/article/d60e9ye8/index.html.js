import comp from "D:/git项目/完美不了一点/helloworld2x-md/docs/.vuepress/.temp/pages/article/d60e9ye8/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/d60e9ye8/\",\"title\":\"browser-rendering\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"browser-rendering\",\"author\":null,\"createTime\":\"2024/05/09 15:58:15\",\"permalink\":\"/article/d60e9ye8/\",\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"回流 reflow\",\"slug\":\"回流-reflow\",\"link\":\"#回流-reflow\",\"children\":[{\"level\":3,\"title\":\"几何属性\",\"slug\":\"几何属性\",\"link\":\"#几何属性\",\"children\":[]},{\"level\":3,\"title\":\"常见的引起回流的属性和方法\",\"slug\":\"常见的引起回流的属性和方法\",\"link\":\"#常见的引起回流的属性和方法\",\"children\":[]},{\"level\":3,\"title\":\"回流影响范围\",\"slug\":\"回流影响范围\",\"link\":\"#回流影响范围\",\"children\":[]}]}],\"isBlogPost\":true,\"readingTime\":{\"minutes\":2.11,\"words\":634},\"git\":{},\"filePathRelative\":\"web/browser/browser-rendering.md\",\"categoryList\":[{\"type\":10003,\"name\":\"web\"},{\"type\":10006,\"name\":\"browser\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
