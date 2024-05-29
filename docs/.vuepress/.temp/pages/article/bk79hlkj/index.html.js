import comp from "D:/git项目/完美不了一点/helloworld2x-md/docs/.vuepress/.temp/pages/article/bk79hlkj/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/bk79hlkj/\",\"title\":\"vite\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"vite\",\"author\":null,\"createTime\":\"2024/05/09 15:58:15\",\"permalink\":\"/article/bk79hlkj/\",\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.04,\"words\":11},\"git\":{\"updatedTime\":1715569112000,\"contributors\":[{\"name\":\"SierCHEN\",\"email\":\"m13606587417@163.com\",\"commits\":1}]},\"filePathRelative\":\"web/framework/vite.md\",\"categoryList\":[{\"type\":10000,\"name\":\"web\"},{\"type\":10001,\"name\":\"framework\"}]}")
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
