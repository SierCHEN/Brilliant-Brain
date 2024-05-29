import comp from "D:/git项目/完美不了一点/helloworld2x-md/docs/.vuepress/.temp/pages/article/asrvoiah/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/asrvoiah/\",\"title\":\"javascript\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"javascript\",\"author\":null,\"createTime\":\"2024/05/09 15:58:15\",\"permalink\":\"/article/asrvoiah/\",\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"函数\",\"slug\":\"函数\",\"link\":\"#函数\",\"children\":[{\"level\":3,\"title\":\"定义函数\",\"slug\":\"定义函数\",\"link\":\"#定义函数\",\"children\":[]},{\"level\":3,\"title\":\"调用函数\",\"slug\":\"调用函数\",\"link\":\"#调用函数\",\"children\":[]}]},{\"level\":2,\"title\":\"Proxy\",\"slug\":\"proxy\",\"link\":\"#proxy\",\"children\":[]}],\"isBlogPost\":true,\"readingTime\":{\"minutes\":2.59,\"words\":778},\"git\":{\"updatedTime\":1715569112000,\"contributors\":[{\"name\":\"SierCHEN\",\"email\":\"m13606587417@163.com\",\"commits\":1}]},\"filePathRelative\":\"web/language/javascript.md\",\"categoryList\":[{\"type\":10000,\"name\":\"web\"},{\"type\":10006,\"name\":\"language\"}]}")
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
