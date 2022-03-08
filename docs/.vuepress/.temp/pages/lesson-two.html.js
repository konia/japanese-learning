export const data = {
  "key": "v-76dedee9",
  "path": "/lesson-two.html",
  "title": "第二課　これは本です",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1646727673000,
    "contributors": [
      {
        "name": "Konia Huo",
        "email": "huoqihua@cn.ibm.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "lesson-two.md"
}

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
