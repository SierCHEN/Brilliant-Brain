import comp from "D:/git项目/完美不了一点/docs/.vuepress/.temp/pages/project/normalizeConfig.html.vue"
const data = JSON.parse("{\"path\":\"/project/normalizeConfig.html\",\"title\":\"vue3 代码规范最佳实践\",\"lang\":\"en-US\",\"frontmatter\":{\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"初始化工程\",\"slug\":\"初始化工程\",\"link\":\"#初始化工程\",\"children\":[{\"level\":3,\"title\":\"vite@latest\",\"slug\":\"vite-latest\",\"link\":\"#vite-latest\",\"children\":[]},{\"level\":3,\"title\":\"vue-ts\",\"slug\":\"vue-ts\",\"link\":\"#vue-ts\",\"children\":[]},{\"level\":3,\"title\":\"报错\",\"slug\":\"报错\",\"link\":\"#报错\",\"children\":[]}]},{\"level\":2,\"title\":\"配置eslint、stylelint、prettier\",\"slug\":\"配置eslint、stylelint、prettier\",\"link\":\"#配置eslint、stylelint、prettier\",\"children\":[{\"level\":3,\"title\":\"安装eslint\",\"slug\":\"安装eslint\",\"link\":\"#安装eslint\",\"children\":[]},{\"level\":3,\"title\":\"eslint初始化\",\"slug\":\"eslint初始化\",\"link\":\"#eslint初始化\",\"children\":[]},{\"level\":3,\"title\":\"安装vite-plugin-eslint\",\"slug\":\"安装vite-plugin-eslint\",\"link\":\"#安装vite-plugin-eslint\",\"children\":[]},{\"level\":3,\"title\":\"执行eslint\",\"slug\":\"执行eslint\",\"link\":\"#执行eslint\",\"children\":[]}]},{\"level\":2,\"title\":\"配置pinia\",\"slug\":\"配置pinia\",\"link\":\"#配置pinia\",\"children\":[]}],\"isBlogPost\":true,\"readingTime\":{\"minutes\":4.73,\"words\":1419},\"git\":{},\"filePathRelative\":\"project/normalizeConfig.md\",\"categoryList\":[{\"type\":10002,\"name\":\"project\"}]}")
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
