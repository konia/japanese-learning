export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "/images/hero.png",
    "actions": [
      {
        "text": "快速上手",
        "link": "/lessons/japanese.html",
        "type": "primary"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022"
  },
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
  "filePathRelative": "README.md"
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
