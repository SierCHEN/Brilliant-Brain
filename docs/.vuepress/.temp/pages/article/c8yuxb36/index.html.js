import comp from "D:/git项目/完美不了一点/helloworld2x-md/docs/.vuepress/.temp/pages/article/c8yuxb36/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/c8yuxb36/\",\"title\":\"vue2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"vue2\",\"author\":null,\"createTime\":\"2024/05/09 15:58:15\",\"permalink\":\"/article/c8yuxb36/\",\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.04,\"words\":11},\"git\":{},\"filePathRelative\":\"web/framework/vue2.md\",\"categoryList\":[{\"type\":10003,\"name\":\"web\"},{\"type\":10004,\"name\":\"framework\"}]}")
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
