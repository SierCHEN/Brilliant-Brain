import comp from "D:/git项目/完美不了一点/helloworld2x-md/docs/.vuepress/.temp/pages/article/frdimb4n/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/frdimb4n/\",\"title\":\"vue-router\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"vue-router\",\"author\":null,\"createTime\":\"2024/05/13 11:23:53\",\"permalink\":\"/article/frdimb4n/\",\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"$router VS $route\",\"slug\":\"router-vs-route\",\"link\":\"#router-vs-route\",\"children\":[]},{\"level\":2,\"title\":\"hash VS history\",\"slug\":\"hash-vs-history\",\"link\":\"#hash-vs-history\",\"children\":[]},{\"level\":2,\"title\":\"路由守卫\",\"slug\":\"路由守卫\",\"link\":\"#路由守卫\",\"children\":[]}],\"isBlogPost\":true,\"readingTime\":{\"minutes\":1.07,\"words\":321},\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"web/framework/vue-router.md\",\"categoryList\":[{\"type\":10000,\"name\":\"web\"},{\"type\":10001,\"name\":\"framework\"}]}")
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
