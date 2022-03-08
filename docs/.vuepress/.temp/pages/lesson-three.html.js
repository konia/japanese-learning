export const data = {
  "key": "v-16bf77d7",
  "path": "/lesson-three.html",
  "title": "第三課　ここはデパートです",
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
  "filePathRelative": "lesson-three.md"
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
