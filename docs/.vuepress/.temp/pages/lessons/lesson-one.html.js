export const data = {
  "key": "v-38047c3b",
  "path": "/lessons/lesson-one.html",
  "title": "第一課　李さんは中国人です",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1646729284000,
    "contributors": [
      {
        "name": "Konia Huo",
        "email": "huoqihua@cn.ibm.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "lessons/lesson-one.md"
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
