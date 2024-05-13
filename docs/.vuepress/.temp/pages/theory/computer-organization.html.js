import comp from "D:/git项目/完美不了一点/docs/.vuepress/.temp/pages/theory/computer-organization.html.vue"
const data = JSON.parse("{\"path\":\"/theory/computer-organization.html\",\"title\":\"计算机组成原理\",\"lang\":\"en-US\",\"frontmatter\":{\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"冯·诺伊曼体系结构(Von Neumann architecture)\",\"slug\":\"冯·诺伊曼体系结构-von-neumann-architecture\",\"link\":\"#冯·诺伊曼体系结构-von-neumann-architecture\",\"children\":[]}],\"isBlogPost\":true,\"readingTime\":{\"minutes\":0.83,\"words\":249},\"git\":{},\"filePathRelative\":\"theory/computer-organization.md\",\"categoryList\":[{\"type\":10001,\"name\":\"theory\"}]}")
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
