import comp from "D:/git项目/完美不了一点/docs/.vuepress/.temp/pages/web/language/javascript.html.vue"
const data = JSON.parse("{\"path\":\"/web/language/javascript.html\",\"title\":\"JavaScript\",\"lang\":\"en-US\",\"frontmatter\":{\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"函数\",\"slug\":\"函数\",\"link\":\"#函数\",\"children\":[{\"level\":3,\"title\":\"定义函数\",\"slug\":\"定义函数\",\"link\":\"#定义函数\",\"children\":[]},{\"level\":3,\"title\":\"调用函数\",\"slug\":\"调用函数\",\"link\":\"#调用函数\",\"children\":[]}]}],\"isBlogPost\":true,\"readingTime\":{\"minutes\":1.18,\"words\":354},\"git\":{},\"filePathRelative\":\"web/language/javascript.md\",\"categoryList\":[{\"type\":10003,\"name\":\"web\"},{\"type\":10005,\"name\":\"language\"}]}")
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
